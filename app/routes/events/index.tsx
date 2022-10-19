import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventsJson } from "~/utils/events.server";

export async function loader() {
  const events = await getEventsJson();

  return json(events, {
    headers: {
      "Cache-Control": "private, max-age=3600",
    },
  });
}

export default function Events() {
  const events = useLoaderData<typeof loader>();

  console.log(events);
  return (
    <div>
      <main>
        <h1>Events list</h1>
        <ul>
          {events.map((event) => (
            <li>
              <Link to={`./${event.slug}`}>{event.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
