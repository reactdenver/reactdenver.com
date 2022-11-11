import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getEventJson } from "~/utils/events.server";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.slug, "Slug/ID missing");
  const event = await getEventJson(params.slug);
  console.log(params);

  return json(event, {
    headers: {
      "Cache-Control": "private, max-age=3600",
    },
  });
};

export default function EventSlug() {
  const event = useLoaderData<typeof loader>();

  return (
    <div>
      <main>
        <h1>Event</h1>
        <img src={event.frontmatter.front_image} />
      </main>
    </div>
  );
}
