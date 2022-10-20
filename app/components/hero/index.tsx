import styles from "./styles.css";

import { Link } from "@remix-run/react";

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Hero() {
  return (
    <div className="hero__container">
      <h1>A community meetup for React developers in and around Denver</h1>
      <h3>Happening monthly in Downtown Denver & online</h3>
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
  );
}
