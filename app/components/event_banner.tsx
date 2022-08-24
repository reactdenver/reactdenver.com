import React from "react";

//need to load next event data and have banner link to single event page (slug)

export default function EventBanner() {
  const banner_style = {
    color: "white",
    backgroundColor: "#A379C9",
    padding: "10px",
    textAlign: "center",
  };
  return <div style={banner_style}>Next meetup: Thurs, Sept 04</div>;
}
