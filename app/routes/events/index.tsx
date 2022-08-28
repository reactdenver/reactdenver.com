import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { getEventMdxListItems } from "~/utils/mdx";

export async function loader() {
  const events = await getEventMdxListItems();

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
          <li>placeholder event</li>
        </ul>
      </main>
    </div>
  );
}
