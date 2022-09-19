import React from "react";

export default function Events_LG(event: object) {
  const eventTitle =
    "Building React apps with End to End Encryption + Demystifying State Machines!";
  const eventAuthor = "Jane Goodall, Dennis Realman";
  const eventAddress = "1595 Wynkoop Street, Denver CO & online";
  const imgURL = require("~/assets/Thumb-Example.png");
  return (
    <div className="event-lg-container">
      <img className="event-thumb-lg" src={imgURL} />
      <div className="event-lg-text-container">
        <div style={{ display: "flex", flex: 1, marginBottom: 20 }}></div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-around",
            width: "80%",
            marginTop: 20,
          }}
        >
          <p className="event-next-text">NEXT MEETUP</p>
          <h3 className="event-title-text">{eventTitle}</h3>
          <p className="event-speaker-text">{eventAuthor}</p>
          <p className="event-speaker-text">{eventAddress}</p>
        </div>
      </div>
    </div>
  );
}
