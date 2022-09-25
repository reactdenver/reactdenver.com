import React from "react";
import styles from "~/style/index.css";

export default function Footer() {

  return <div id='footer-box'>
    <div id='footer'>
    </div>
    <img id="RD_footer_icon" src={require("../assets/RD_footer_icon.png")} alt="React Denver icon"/>
    <img id="footer_skyline" src={require("../assets/footer_skyline.png")} alt="City skyline"/>
    <div id='footer-links'>
      <a href="#" >Code of Conduct</a>
      <a href="#" >Privacy Policy</a>
    </div>
  </div>
}