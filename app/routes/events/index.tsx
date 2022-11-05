import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventsJson } from "~/utils/events.server";

import Event from "~/components/event";

export async function loader() {
  const events = await getEventsJson();

  return json(events, {
    headers: {
      "Cache-Control": "private, max-age=3600",
    },
  });
}

export default function Events() {
  const eventSize = "md";
  const events = useLoaderData<typeof loader>();
  const eventsPast = events.filter(
    (event) => event.date && new Date() >= new Date(event.date)
  );
  const futureEvent = events.find(
    (event) => event.date && new Date() < new Date(event.date)
  );
  let eventsShown = eventsPast.concat(futureEvent || []).reverse();
  if (eventsShown.length > 7) eventsShown = eventsShown.slice(-7);

  return (
    <div className={"events"}>
      <h4 className={"events__headline"}>Events:</h4>
      {eventsShown.map((event) => (
        <Link
          key={event.id}
          className={"event__content"}
          to={`./${event.slug}`}
        >
          <Event event={event} size={"medium"} />
        </Link>
      ))}
    </div>
  );
}
