import { Link } from "@remix-run/react";
import Forms from "./posts/form";

export default function Index() {
  return (
    <div
      className="main-container"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}
    >
      <div className="main-left-container">
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
            <a href="https://discord.com">
              <div id="discord-btn" className="link-btn">
                <img
                  src={require("~/assets/discord_icon.png")}
                  id="discord-btn-icon"
                />
                <p id="discord-btn-text">Join the Discord</p>
              </div>
            </a>
            <Link to="/events">
              <div className="link-btn">
                <p></p>
              </div>
            </Link>
          </div>
        </div>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
      <div className="main-right-container">
        <Forms />
      </div>
    </div>
  );
}
