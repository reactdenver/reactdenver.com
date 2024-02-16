import HomePage from "./minimal";

import { getAllEvents } from "@/lib/sanity/client";

export default async function MinimalHomePage() {
  const events = await getAllEvents();
  return <HomePage events={events} />;
}

export const revalidate = 60;
