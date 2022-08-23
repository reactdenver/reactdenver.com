import { Link } from '@remix-run/react';
import NavBar from '~/components/nav_bar';

export default function Events() {
  return (
    <div>
      <NavBar/>
      <main>
        <h1>
          Events list
        </h1>
        <ul>
          <li>
            placeholder event
          </li>
        </ul>
      </main>
    </div>
  );
};