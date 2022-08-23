import { Link } from '@remix-run/react';
import EventBanner from '~/components/event_banner';
import NavBar from '~/components/nav_bar';

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div>
        <EventBanner/>
      </div>
      <div>
        <NavBar/>
      </div>
      <h1>Welcome to Remix</h1>
      
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
      <Link to="/events">
        Events list
      </Link>
      
    </div>
  );
};
