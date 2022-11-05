import React from "react";
import { format } from "date-fns";

export default function Event(params: any, size: string) {
  const event = {
    id: params.event.id,
    slug: params.event.slug,
    title: params.event.title,
    description: params.event.description,
    location: params.event.location,
    date: params.event.date,
    speakers: [
      {
        name: params.event.speakers[0].name,
      },
    ],
  };
  console.log(params.size);
  return (
    <div className="event__content">
      <img
        className={`event__image_${params.size}`}
        src={"https://source.unsplash.com/random/400x300"}
        alt={event.title}
      ></img>
      {/*=============== Image source to be changed from placeholder when available========= */}
      <div className={"event__text-box"}>
        <p className={"event__text_small"}>
          {typeof event.date === "string" &&
            format(new Date(event.date), "EEE, MMM d, y")}
        </p>
        <h3 className={"event__text_large"}>{event.title}</h3>
        <p className={"event__text_small"}>
          {event.speakers?.map((speaker) => `${speaker.name}`).join(", ")}
        </p>
        <p className={"event__text_small"}>{event.location}</p>
      </div>
    </div>
  );
}
