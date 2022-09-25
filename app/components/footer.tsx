import React from "react";
import styles from "~/style/index.css";

export default function Footer() {

  return <div id='footer-box'>
    <div id='footer'>
    </div>
    <img id="RD_footer_icon" src={require("../assets/RD_footer_icon.png")} />
    <img id="footer_skyline" src={require("../assets/footer_skyline.png")} />
  </div>
}