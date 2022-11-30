import { Link, useLoaderData } from "@remix-run/react";
import Events_LG from "~/components/event_lg";
import Forms, {submitForm, checkSlug} from "./posts/form";
import Hero, { links as heroLinks } from "../components/hero";
import Sponsors, { links as sponsorsLinks } from "../components/sponsors";
import { getEventsJson } from "~/utils/events.server";
import axios from 'axios'
import { checkSlug } from "~/utils/tito.server";
import { json } from "@remix-run/server-runtime";

export const links = () => [...heroLinks(), ...sponsorsLinks()];

export const loader = async () => {
  const titoData = await checkSlug();
  return json(titoData)
}

export const action = async ({request}) => {

    const form = await request.formData();
    const name = form.get('first-name')
    const email = form.get('email')
    const ticketType = form.get('in-person/online')
    const pizza = form.get('pizza')
    const slugId = form.get('slug-id')
    const virtualId = form.get('virtual-id')
    const inPersonId = form.get('inPerson-id')

    const headers = {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Token token=${process.env.SECRET_ACCESS_TOKEN}`,
    Accept: 'application/json',
    "Content-Type": 'application/json'
    }

console.log(name, email, ticketType, pizza, slugId, virtualId, inPersonId);

try {

    const isAttendingInPersonOrOnline = ticketType === 'online' ? virtualId : inPersonId

    const registration = {
      "registration":
          {
              "email": email,
              "name": name,
              "discount_code":"",
              "source":"",
              "line_items":[{"release_id":isAttendingInPersonOrOnline,"quantity":1}]
          }
    }

    const authPost = axios.create({
      baseURL: `https://api.tito.io/v3/react-denver/${slugId}`,
      headers: headers,
      })
    
    const response = await authPost.post('/registrations', registration)
    const registrationData = response.data
    console.log('data', registrationData.registration.name);
  } 
  catch (error) {
    console.log(error.response.data);
  }
  return ""; 
}

const PreviousEventTile = ({ size, image, date, title, slug, speakers }) => {
  return (
    <div className="previousEventTile">
      <Link
        to={slug}
        className="previousEventTile__image"
        style={{
          minWidth: size + "px",
          backgroundImage: "url('" + image + "')",
        }}
      >
        {/* <img
          src={image}
          alt={`Photo from ${title}`}
          style={{ width: size + "px" }}
        /> */}
        {/* </div> */}
      </Link>
      <div className="previousEventTile__detail">
        <span className="previousEventTile__date">{date}</span>
        <Link to={slug}>
          <h3 className="previousEventTile__title">{title}</h3>
        </Link>
        <span className="previousEventTile__speakers">{speakers}</span>
      </div>
    </div>
  );
};

const UpcomingEvent = ({ title, speakers, location, eventData }) => {
  return (
    <div>
      <div className="nextMeetupHero">
        <span>Next Meetup</span>
        <h2>{title}</h2>
        <p>{speakers}</p>
        <p>{location} & online</p>
      </div>
      <Forms eventData={eventData}/>
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
  const eventData = useLoaderData()
  console.log(eventData);
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
        eventData={eventData}
      />
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
