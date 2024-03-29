import { Link, useLoaderData, useActionData } from "@remix-run/react";
import Event from "~/components/event";
import SignupForm from "~/components/form";
import Hero, { links as heroLinks } from "~/components/hero";
import Sponsors, { links as sponsorsLinks } from "~/components/sponsors";
import { EmailForm } from "~/components/emailForm";
import { getEventsJson } from "~/utils/events.server";
import { json } from "@remix-run/node";
import { format, addMinutes } from "date-fns";
import type { MdxPage } from "types";
import useEventDates from "~/hooks/useEventDates";
import { checkSlug, createRegistration } from "~/utils/tito.server";
import { createSubscription } from "~/utils/converkit.server";

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
        )}{" "}
        - 6:00 pm (MST)
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
  const intent = form.get("intent");

  if (intent === "subscription") {
    const email = form.get("email");
    if (typeof email !== "string") {
      throw new Error("Email is not valid");
    }

    const message = await createSubscription(email);
    return json({ message, type: "subscription" });
  } else {
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

    if (name.includes("redir.php")) {
      throw new Error(
        "Your name probably doesn't look like that. Are you sure your not a bot?"
      );
    }

    const message = await createRegistration({
      name,
      email,
      releaseId: ticketType === "virtual" ? virtualId : inPersonId,
      eventSlug: slugId,
    });

    return json({ message, type: "event" });
  }
};

export default function Index() {
  const { events, ...titoEventData } = useLoaderData<typeof loader>();
  const actionMessage = useActionData<typeof action>();

  const eventMessage =
    actionMessage?.type === "event" ? actionMessage : undefined;
  const subscriptionMessage =
    actionMessage?.type === "subscription" ? actionMessage : undefined;

  const { eventNext, eventsPast } = useEventDates(events);

  let eventsPastShown = [];
  eventsPast.length > 4 ? (eventsPastShown = eventsPast.slice(-4)) : null;
  eventsPastShown.reverse();

  return (
    <div className="page__container">
      <EmailForm responseMessage={subscriptionMessage} />
      <Hero />
      <div className="main-right-container">
        <UpcomingEvent event={eventNext!} />

        <SignupForm eventData={titoEventData} responseMessage={eventMessage} />
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
