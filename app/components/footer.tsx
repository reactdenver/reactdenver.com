import { Link } from "@remix-run/react";
import PrivacyPolicy from "~/routes/privacy_policy";

import ReactDenverLogo from "../assets/react_denver_logo.svg";
import YouTube from "../assets/YouTube.svg";
import Discord from "../assets/Discord.svg";
import GitHub from "../assets/GitHub.svg";
import Twitter from "../assets/Twitter.svg";

export default function Footer() {
  return (
    <div
      style={{
        height: "250px",
        backgroundColor: "#A379C9",
        display: "flex",
        alignItems: "center",
        paddingLeft: "5%",
      }}
    >
      <img style={{ maxHeight: "50px" }} src={ReactDenverLogo} />
      <a href="">
        <img style={{ maxHeight: "50px" }} src={Discord} />
      </a>
      <a href="https://github.com/reactdenver">
        <img style={{ maxHeight: "50px" }} src={GitHub} />
      </a>
      <a href="https://mobile.twitter.com/ReactDenver">
        <img style={{ maxHeight: "50px" }} src={Twitter} />
      </a>
      <a href="https://www.youtube.com/c/ReactDenver">
        <img style={{ maxHeight: "50px" }} src={YouTube} />
      </a>
      <a href="">Netlify</a>
      <Link
        style={{
          padding: "0 5px 0 10px",
          color: "#666666",
          textDecoration: "none",
        }}
        to="/privacy_policy"
      >
        Privacy Policy
      </Link>
      <Link
        style={{
          padding: "0 5px 0 10px",
          color: "#666666",
          textDecoration: "none",
        }}
        to="/faq"
      >
        FAQ
      </Link>
      <Link
        style={{
          padding: "0 5px 0 10px",
          color: "#666666",
          textDecoration: "none",
        }}
        to="/code_of_conduct"
      >
        Code of Conduct
      </Link>
    </div>
  );
}
