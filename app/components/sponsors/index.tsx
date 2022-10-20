import styles from "./styles.css";
// import { Link } from "@remix-run/react";

export const links = () => [
  {
    rel: "preload",
    href: "/gusto.png",
    as: "image",
    type: "image/svg+xml",
  },
  { rel: "stylesheet", href: styles },
];

export default function Sponsors() {
  return (
    <div className="sponsor__container">
      <p className="sc">
        Supported on Open Collective by the following fine folks:
      </p>
      <div className="sponsor__images">
        <img src="./The_Trade_Desk.png" />
        <img src="./gusto.png" />
        <img src="./technical_integrity.png" />
      </div>
      <div className="sponsor__people">
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
        <div className="sponsor__person"></div>
      </div>
    </div>
  );
}
