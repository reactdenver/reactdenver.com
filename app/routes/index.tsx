import { Link, useLoaderData } from "@remix-run/react";
import Event from "~/components/event";
import Forms from "./posts/form";
import Hero, { links as heroLinks } from "../components/hero";
import Sponsors, { links as sponsorsLinks } from "../components/sponsors";
import { getEventsJson } from "~/utils/events.server";
import { json } from "@remix-run/node";
import { format, addMinutes } from "date-fns";
import type { MdxPage } from "types";

export const links = () => [...heroLinks(), ...sponsorsLinks()];

type UpcomingEventProps = {
  event: MdxPage["frontmatter"] & { slug: MdxPage["slug"] };
};

const UpcomingEvent = ({ event }: UpcomingEventProps) => {
  const actualDate = new Date(event.date!);
  const speakerList = event.speakers!.map((speaker) => speaker.name).join(", ");
  return (
    <Link
      to={`./events/${event.slug}`}
      className="nextMeetupHero"
      title={event.title}
      style={{ background: `url(${event.front_image})` }}
    >
      <span>Next Meetup</span>
      <h2>{event.title}</h2>
      <p className="event__text_small">
        {format(
          addMinutes(actualDate, actualDate.getTimezoneOffset()),
          "EEE, MMM d, y"
        )}
      </p>
      <p>{speakerList}</p>
      <p>{event.location} & online</p>
    </Link>
  );
};

//load events from MDX files
export async function loader() {
  const events = await getEventsJson();

  return json(events, {
    headers: {
      "Cache-Control": "private, max-age=3600",
    },
  });
}

export default function Index() {
  const now = new Date();

  const eventsAll = useLoaderData<typeof loader>();
  let eventsPast = eventsAll.filter((event) => {
    console.log(event.date && new Date(event.date));
    return (
      event.date &&
      now > new Date(event.date) &&
      !isSameDay(now, new Date(event.date))
    );
  });

  console.log(eventsPast);

  //get next event info
  let eventNext = eventsAll.filter(
    (event) =>
      event.date &&
      (now <= new Date(event.date) || isSameDay(now, new Date(event.date)))
  )[0];

  //only show most recent 4 events
  eventsPast.length > 4 ? (eventsPast = eventsPast.slice(-4)) : null;
  eventsPast.reverse(); //display most recent to oldest

  function isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  return (
    <div className="page__container">
      <Hero />
      <div className="main-right-container"></div>

      <UpcomingEvent event={eventNext!} />
      {/* <Forms /> */}
      <Sponsors />
      <span className="line"></span>
      <div className="home__previousEventTiles">
        <h2>Catch recordings from previous events:</h2>

        {/* insert mapped events here */}
        {eventsPast.map((event) => (
          <Link key={event.id} to={`./events/${event.slug}`}>
            <Event event={event} size={"small"} />
          </Link>
        ))}

        <div>
          <Link className="seeMoreLink" to="/events">
            See all past events
          </Link>
        </div>
      </div>
      <span className="line"></span>
      <div className="home__discord">
        <h2>Join the Discord to connect before and after the show.</h2>
        <div className="home__discordButtons">
          <img
            className="home__discourdButtonsLogo"
            src={require("~/assets/Discord-Logo-Color1.svg")}
          />
          {/* oops these probably should be links */}
          <button>#general</button>
          <button>#events</button>
          <button>#hiring</button>
          <button>#speaking</button>
        </div>
      </div>
    </div>
  );
}
