import EventPage from "./sidebar";
import { urlForImage } from "@/lib/sanity/image";
import { getAllEventSlugs, getEventBySlug } from "@/lib/sanity/client";

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
  return <EventPage event={event} />;
}

// export const revalidate = 60;
