import Organizer from "./organizer";

import { getOrganizerBySlug } from "@/lib/sanity/client";

async function getOrganizer(slug) {
  const organizer = await getOrganizerBySlug(slug);
  return organizer || {};
}

export async function generateMetadata({ params }) {
  const organizer = await getOrganizer(params.organizer);
  return { name: organizer.name };
}

export default async function OrganizerPage({ params }) {
  const organizer = await getOrganizer(params.organizer);
  return <Organizer organizer={organizer} />;
}

// export const revalidate = 60;
