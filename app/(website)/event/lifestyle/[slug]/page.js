import EventPage from "./lifestyle";

import { getAllEventSlugs, getEventBySlug } from "@/lib/sanity/client";
import { urlForImage } from "@/lib/sanity/image";
import checkTitoSlug from "@/app/api/tito-check-slug";

export async function generateStaticParams() {
  return await getAllEventSlugs();
}

export async function generateMetadata({ params }) {
  const event = await getEventBySlug(params.slug);
  return {
    title: event.title,
    keywords: ["React Denver", "React Meetup Denver", event.title],
    authors: [{ name: event.speaker.name }],
    openGraph: {
      title: event.title,
      description: event.excerpt,
      images: [
        {
          url: urlForImage(event?.mainImage)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      title: event?.title || "React Denver",
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function EventDefault({ params }) {
  const event = await getEventBySlug(params.slug);
  const nextEventData = await checkTitoSlug(event.titoSlug);
  return <EventPage event={event} nextEventData={nextEventData} />;
}

export const revalidate = 60;
