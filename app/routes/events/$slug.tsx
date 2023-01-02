import { Params, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getEventJson } from "~/utils/events.server";

import { format, addMinutes } from "date-fns";

export const loader = async ({ params }: { params: Params }) => {
  invariant(params.slug, "Slug/ID missing");
  const event = await getEventJson(params.slug);

  return json(event, {
    headers: {
      "Cache-Control": "private, max-age=3600",
    },
  });
};

export default function EventSlug() {
  const event = useLoaderData<typeof loader>();
  const actualDate = new Date(event.frontmatter.date!);
  return (
    <div className="eventLG__content">
      <div className="eventLG__text_container">
        <h3 className="eventLG__text_large">{event.frontmatter.title}</h3>
        <p className="eventLG__text_medium">
          {typeof event.frontmatter.date === "string" &&
            format(
              addMinutes(actualDate, actualDate.getTimezoneOffset()),
              "EEE, MMM d, y"
            )}
        </p>
      </div>
      <div className="eventLG__text_container_details">
        <p className="eventLG__text_small">
          🎤{"  "}
          {event.frontmatter.speakers
            ?.map((speaker) => `${speaker.name}`)
            .join(", ")}
        </p>
        <div className="event__text_box">
          {event.frontmatter.date &&
          new Date() <= new Date(event.frontmatter.date) ? (
            <p className="eventLG__text_small">
              🏢{event.frontmatter.location}
            </p>
          ) : null}
        </div>
      </div>
      {event.frontmatter.youtube_id ? (
        <iframe
          width="840"
          height="507"
          src={`https://www.youtube.com/embed/${event.frontmatter.youtube_id}`}
          title={event.frontmatter.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <img
          className="event__image_large"
          src={event.frontmatter.front_image}
          alt={event.frontmatter.title}
        />
      )}
      <div className="eventLG__text_description">
        <h3>Description</h3>
        <p className="event__text_small">{event.frontmatter.description}</p>
      </div>
    </div>
  );
}
