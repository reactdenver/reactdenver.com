import React from "react";
import styles from "~/style/index.css";

import { Link } from "@remix-run/react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <Link className="header-left-link" to="/">
          <img id="RD-header-icon" src={require("~/assets/RD_Nav_Icon.png")} />
        </Link>
        <p className="header-left-link" id="RD-header-text">
          React Denver
        </p>
      </div>
      <div className="header-right">
        <Link to="/events" className="header-right-link">
          Events
        </Link>
        <Link to="/talk" className="header-right-link">
          Submit a Talk
        </Link>
      </div>
    </div>
  );
}
