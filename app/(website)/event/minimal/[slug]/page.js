import EventPage from "./minimal";

import { getAllEventSlugs, getEventBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllEventSlugs();
}

export async function generateMetadata({ params }) {
  const event = await getEventBySlug(params.slug);
  return { title: event.title };
}

export default async function EventDefault({ params }) {
  const event = await getEventBySlug(params.slug);
  return <EventPage event={event} />;
}

// export const revalidate = 60;
