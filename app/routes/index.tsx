import { Link } from "@remix-run/react";
import Forms from "./posts/form";
import Hero, { links as heroLinks } from "../components/hero";
import Sponsors, { links as sponsorsLinks } from "../components/sponsors";

export const links = () => [...heroLinks(), ...sponsorsLinks()];

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

export default function Index() {
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
        <PreviousEventTile
          image={
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
          }
          slug="/"
          size={240}
          date="Thurs, Sept 04"
          title="React Hooks, Line & Sinker + Getting Real(time) w/ React, Redux, & Elixir"
          speakers="Jane Goodall, Dennis Realman"
        />
        <PreviousEventTile
          image={
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
          }
          slug="/"
          size={240}
          date="Thurs, Sept 04"
          title="React Hooks, Line & Sinker + Getting Real(time) w/ React, Redux, & Elixir"
          speakers="Jane Goodall, Dennis Realman"
        />
        <PreviousEventTile
          image={
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
          }
          slug="/"
          size={240}
          date="Thurs, Sept 04"
          title="React Hooks, Line & Sinker + Getting Real(time) w/ React, Redux, & Elixir"
          speakers="Jane Goodall, Dennis Realman"
        />
        <PreviousEventTile
          image={
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
          }
          slug="/"
          size={240}
          date="Thurs, Sept 04"
          title="React Hooks, Line & Sinker + Getting Real(time) w/ React, Redux, & Elixir"
          speakers="Jane Goodall, Dennis Realman"
        />
        <PreviousEventTile
          image={
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"
          }
          slug="/"
          size={240}
          date="Thurs, Sept 04"
          title="React Hooks, Line & Sinker + Getting Real(time) w/ React, Redux, & Elixir"
          speakers="Jane Goodall, Dennis Realman"
        />
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

/* <div className="main-left-container">
  <div className="welcome-section-container">
    <div className="welcome-item">
      <h1 id="welcome-text">
        A community meetup for React developers in and around Denver
      </h1>
    </div>
    <div className="welcome-item">
      <h5 id="tagline-text">Happening monthly in downtown and online</h5>
    </div>
    <div className="welcome-item">
      <a id="discord-link" href="https://discord.gg/fFngBEwNmV">
        <div id="discord-btn" className="link-btn">
          <img
            src={require("~/assets/discord_icon.png")}
            id="discord-btn-icon"
          />
          <p id="discord-btn-text">Join the Discord</p>
        </div>
      </a>
      <div id="events-link">
        <Link style={{ textDecoration: "none" }} to="/events">
          <div id="events-btn" className="link-btn">
            <p>See all events</p>
          </div>
        </Link>
      </div>
    </div>
  </div>
</div> */
