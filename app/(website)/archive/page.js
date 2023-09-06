import Archive from "./archive";

import { getPaginatedEvents } from "@/lib/sanity/client";

const EVENTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const events = await getPaginatedEvents(EVENTS_PER_PAGE);
  return <Archive events={events} />;
}

// export const revalidate = 60;
