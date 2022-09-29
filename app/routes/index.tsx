import { Link } from "@remix-run/react";
import Forms from "./posts/form";
import Hero, { links as heroLinks } from "../components/hero";

export const links = () => [...heroLinks()];

export default function Index() {
  return (
    <div className="">
      <Hero />
      <div className="main-right-container">
        <Forms />
      </div>
      {/* <div className="main-left-container">
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
      </div> */}
    </div>
  );
}
