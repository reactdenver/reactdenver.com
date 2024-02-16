import { Suspense } from "react";
import Archive from "./archive";

import { getPaginatedEvents } from "@/lib/sanity/client";

const EVENTS_PER_PAGE = 6;

export default async function ArchivePage() {
  const events = await getPaginatedEvents(EVENTS_PER_PAGE);
  return (
    <Suspense>
      <Archive events={events} />
    </Suspense>
  );
}

export const revalidate = 60;
