import { Link, useLoaderData } from "@remix-run/react";
import Event from "~/components/event";
import Forms from "./posts/form";
import Hero, { links as heroLinks } from "../components/hero";
import Sponsors, { links as sponsorsLinks } from "../components/sponsors";
import { getEventsJson } from "~/utils/events.server";
import { json } from "@remix-run/node";

export const links = () => [...heroLinks(), ...sponsorsLinks()];

const UpcomingEvent = ({ title, speakers, location }) => {
  return (
    <div>
      <div className="nextMeetupHero">
        <span>Next Meetup</span>
        <h2>{title}</h2>
        <p>{speakers}</p>
        <p>{location} & online</p>
      </div>
      <Forms />
    </div>
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

  //need to define variable for next event and use in info in JSX below

  //only show most recent 4 events
  eventsPast.length > 4 ? (eventsPast = eventsPast.slice(-4)) : null;
  eventsPast.reverse(); //display most recent to oldest

  return (
    <div className="page__container">
      <Hero />
      <div className="main-right-container"></div>
      <UpcomingEvent
        image={
          "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80"
        }
        title="Building React apps with End to End Encryption + Demystifying State Machines!"
        speakers="Jane Goodall, Dennis Realman"
        location="1595 Wynkoop Street, Denver CO"
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
