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
        <a href="https://www.thetradedesk.com/us" target="_blank">
          <img src="./The_Trade_Desk.png" />
        </a>
        <a href="https://gusto.com/" target="_blank">
          <img src="./gusto.png" />
        </a>
        <a href="https://technicalintegrity.com/" target="_blank">
          <img src="./technical_integrity.png" />
        </a>
      </div>
    </div>
  );
}
