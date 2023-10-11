import Organizer from "./organizer";

import { getOrganizerBySlug } from "@/lib/sanity/client";

async function getOrganizer(slug) {
  const organizer = await getOrganizerBySlug(slug);
  return organizer || {};
}

export async function generateMetadata({ params }) {
  const organizer = await getOrganizer(params.organizer);
  return {
    title: organizer.name,
    keywords: ["React", "React Denver", organizer.name],
    openGraph: {
      title: organizer.name,
      description: organizer.bio,
      images: [
        {
          url: urlForImage(organizer.image)?.src || "/img/opengraph.jpg",
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function OrganizerPage({ params }) {
  const organizer = await getOrganizer(params.organizer);
  return <Organizer organizer={organizer} />;
}

// export const revalidate = 60;
