import { Link } from '@remix-run/react';
import Forms from './posts/form'

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div>
        nav bar
        <Link to="/faq">
          FAQ
        </Link>
        <Link to="/code_of_conduct">
          Code of Conduct
        </Link>
      </div>
      <h1>Welcome to Remix</h1>
      <Forms />
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
