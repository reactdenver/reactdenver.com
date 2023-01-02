import { Link, useLoaderData, useActionData } from "@remix-run/react";
import Event from "~/components/event";
import SignupForm from "~/components/form";
import Hero, { links as heroLinks } from "~/components/hero";
import Sponsors, { links as sponsorsLinks } from "~/components/sponsors";
import { getEventsJson } from "~/utils/events.server";
import { json } from "@remix-run/node";
import { format, addMinutes } from "date-fns";
import type { MdxPage } from "types";
import useEventDates from "~/hooks/useEventDates";
import { checkSlug, createRegistration } from "~/utils/tito.server";

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
  const titoEventData = await checkSlug();

  return json(
    { events, ...titoEventData },
    {
      headers: {
        "Cache-Control": "private, max-age=3600",
      },
    }
  );
}

export const action = async ({ request }: { request: Request }) => {
  const form = await request.formData();
  const name = form.get("first-name");
  const email = form.get("email");
  const ticketType = form.get("in-person/online");
  const slugId = form.get("slug-id");
  const virtualId = form.get("virtual-id");
  const inPersonId = form.get("inPerson-id");

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof slugId !== "string" ||
    typeof virtualId !== "string" ||
    typeof inPersonId !== "string" ||
    typeof ticketType !== "string"
  ) {
    throw new Error("Invalid form values");
  }

  const message = await createRegistration({
    name,
    email,
    releaseId: ticketType === "virtual" ? virtualId : inPersonId,
    eventSlug: slugId,
  });

  return json({ message });
};

export default function Index() {
  const { events, ...titoEventData } = useLoaderData<typeof loader>();
  const signupEventMessage = useActionData<typeof action>();

  const { eventNext, eventsPast } = useEventDates(events);

  let eventsPastShown = [];
  eventsPast.length > 4 ? (eventsPastShown = eventsPast.slice(-4)) : null;
  eventsPastShown.reverse();

  return (
    <div className="page__container">
      <Hero />
      <div className="main-right-container">
        <UpcomingEvent event={eventNext!} />

        <SignupForm
          eventData={titoEventData}
          responseMessage={signupEventMessage}
        />
      </div>

      <Sponsors />
      <span className="line"></span>
      <div className="home__previousEventTiles">
        <h2>Catch recordings from previous events:</h2>

        {/* insert mapped events here */}
        {eventsPastShown.map((event) => (
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
        <a id="discord-link" href="https://discord.gg/fFngBEwNmV">
          <div id="discord-btn" className="link-btn" style={{ width: "165px" }}>
            <img
              src={require("~/assets/discord_icon.png")}
              id="discord-btn-icon"
            />
            <p id="discord-btn-text"># General</p>
          </div>
        </a>
      </div>
    </div>
  );
}
