import { Link } from "@remix-run/react";
import styles from '../styles/index.css';

export const links = () => [{ rel: "stylesheet", href: styles }];

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__body"></div>
      <Link to="/">
        <img
          className="footer__RD-icon"
          src={require("../assets/RD_footer_icon.png")}
          alt="React Denver icon"
        />
      </Link>
      <img
        className="footer__skyline"
        src={require("../assets/footer_skyline.png")}
        alt="City skyline"
      />
      <div className="footer__links-box">
        <Link className="footer__link" to="/code_of_conduct">
          Code of Conduct
        </Link>
        <Link className="footer__link" to="/privacy_policy">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
