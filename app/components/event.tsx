import React from "react";
import { format, addMinutes } from "date-fns";

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
    front_image: params.event.front_image,
  };

  const actualDate = new Date(event.date);

  return (
    <div className="event__content">
      <img
        className={`event__image_${params.size}`}
        src={event.front_image}
        alt={event.title}
      />
      {/*=============== Image source to be changed from placeholder when available========= */}
      <div className={"event__text-box"}>
        <p className={"event__text_small"}>
          {typeof event.date === "string" &&
            format(
              addMinutes(actualDate, actualDate.getTimezoneOffset()),
              "EEE, MMM d, y"
            )}
        </p>
        <h3 className={"event__text_large"}>{event.title}</h3>
        <p className={"event__text_small"}>
          {event.speakers?.map((speaker) => `${speaker.name}`).join(", ")}
        </p>
        {event.date && new Date() <= new Date(event.date) ? (
          <p className={"event__text_small"}>{event.location}</p>
        ) : null}
      </div>
    </div>
  );
}
