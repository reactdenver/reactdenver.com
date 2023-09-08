import EventPage from "./default";
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
  const response = await fetch(`${process.env.DEVELOPMENT_URL}/api/tito-check-slug?eventId=${event.titoSlug}`)
  const nextEventData = await response.json()
  return <EventPage event={event} nextEventData={nextEventData}/>;
}

// export const revalidate = 60;
