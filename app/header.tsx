import React from "react";

import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/faq">FAQ</Link>
      <Link to="/code_of_conduct">Code of Conduct</Link>
    </div>
  );
}
