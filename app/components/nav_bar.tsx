import React from "react";
import { Link } from "@remix-run/react";
import ReactDenverLogo from "../assets/react_denver_logo.svg";

export default function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        borderBottom: "1px solid #DDDDDD",
        maxHeight: "60px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flex: "0 1 30%", paddingLeft: "5%" }}>
        <Link style={{ display: "flex" }} to={"/"}>
          <img
            style={{ maxHeight: "50px", paddingTop: "15px" }}
            src={ReactDenverLogo}
          />
        </Link>
        <Link style={{ color: "black", textDecoration: "none" }} to={"/"}>
          <h1
            style={{
              fontSize: "1.8em",
              fontWeight: "400",
              paddingLeft: "60px",
              textDecoration: "none",
            }}
          >
            React Denver
          </h1>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flex: "1",
          paddingRight: "5%",
        }}
      >
        <Link
          style={{
            padding: "0 10px 0 5px",
            color: "#666666",
            textDecoration: "none",
          }}
          to="/events"
        >
          Events
        </Link>
        <Link
          style={{
            padding: "0 5px 0 10px",
            color: "#666666",
            textDecoration: "none",
          }}
          to="/talk"
        >
          Submit a talk
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
    </div>
  );
}
