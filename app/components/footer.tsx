import React from "react";
import styles from "~/style/index.css";

import { Link } from "@remix-run/react";


export default function Footer() {

  return <div id='footer-box'>
    <div id='footer'>
    </div>
    <img id="RD_footer_icon" src={require("../assets/RD_footer_icon.png")} alt="React Denver icon"/>
    <img id="footer_skyline" src={require("../assets/footer_skyline.png")} alt="City skyline"/>
    <div id='footer-links'>
      <Link to="/code_of_conduct">Code of Conduct</Link>
      <Link to="/privacy_policy">Privacy Policy</Link>
    </div>
  </div>
}