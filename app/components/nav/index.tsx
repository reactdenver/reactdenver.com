import styles from "./styles.css";
import { Link } from "@remix-run/react";

export const links = () => [
  {
    rel: "preload",
    href: "/navLogo.svg",
    as: "image",
    type: "image/svg+xml",
  },
  { rel: "stylesheet", href: styles },
];

export default function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <div className="nav__left">
          <Link className="nav__logo" data-nav-logo to="/" />
        </div>
        <div className="nav__right">
          <Link to="/events" className="">
            Events
          </Link>
        </div>
      </div>
    </nav>
  );
}
