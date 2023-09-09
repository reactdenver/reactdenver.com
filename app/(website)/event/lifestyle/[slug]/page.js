import EventPage from "./lifestyle";

import { getAllEventSlugs, getEventBySlug } from "@/lib/sanity/client";
import checkTitoSlug from "@/app/api/tito-check-slug";

export async function generateStaticParams() {
  return await getAllEventSlugs();
}

export async function generateMetadata({ params }) {
  const event = await getEventBySlug(params.slug);
  return { title: event.title };
}

export default async function EventDefault({ params }) {
  const event = await getEventBySlug(params.slug);
  const nextEventData = await checkTitoSlug(event.titoSlug);
  return <EventPage event={event} nextEventData={nextEventData} />;
}

// export const revalidate = 60;
