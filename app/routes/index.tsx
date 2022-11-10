import { Link, useLoaderData } from "@remix-run/react";
import Event from "~/components/event";
import Forms from "./posts/form";
import Hero, { links as heroLinks } from "../components/hero";
import Sponsors, { links as sponsorsLinks } from "../components/sponsors";
import { getEventsJson } from "~/utils/events.server";
import { json } from "@remix-run/node";
import { format } from "date-fns";

export const links = () => [...heroLinks(), ...sponsorsLinks()];

const UpcomingEvent = ({ slug, title, speakers, location, date, image }) => {
  return (
    <Link
      to={`./events/${slug}`}
      className="nextMeetupHero"
      title={title}
      style={{ background: `url(${image})` }}
    >
      <span>Next Meetup</span>
      <h2>{title}</h2>
      <p className={"event__text_small"}>
        {typeof date === "string" && format(new Date(date), "EEE, MMM d, y")}
      </p>
      <p>{speakers}</p>
      <p>{location} & online</p>
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
  const eventsAll = useLoaderData<typeof loader>();
  let eventsPast = eventsAll.filter(
    (event) => event.date && new Date() >= new Date(event.date)
  );

  //get next event info
  let eventNext = eventsAll.filter(
    (event) => event.date && new Date() <= new Date(event.date)
  );
  eventNext.reverse();
  eventNext.length > 1 ? (eventNext = eventNext.slice(-1)) : null;

  //only show most recent 4 events
  eventsPast.length > 4 ? (eventsPast = eventsPast.slice(-4)) : null;
  eventsPast.reverse(); //display most recent to oldest

  return (
    <div className="page__container">
      <Hero />
      <div className="main-right-container"></div>

      <UpcomingEvent
        slug={eventNext[0]?.slug}
        image={eventNext[0]?.front_image}
        date={eventNext[0]?.date}
        title={eventNext[0]?.title}
        speakers={eventNext[0]?.speakers[0]?.name}
        location={eventNext[0]?.location}
      />
      <Sponsors />
      <span className="line"></span>
      <div className="home__previousEventTiles">
        <h2>Catch recordings from previous events:</h2>

        {/* insert mapped events here */}
        {eventsPast.map((event) => (
          <Link
            className="event__content"
            key={event.id}
            to={`./events/${event.slug}`}
          >
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
