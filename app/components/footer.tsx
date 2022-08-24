import { Link } from "@remix-run/react";
import ReactDenverLogo from "../assets/react_denver_logo.svg";
import PrivacyPolicy from "~/routes/privacy_policy";

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
      <a href="">discord</a>
      <a href="">github</a>
      <a href="">twitter</a>
      <a href="">youtube</a>
      <a href="">netlify</a>
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
