import HomeTwoCol from "./two-col";

import { getAllEvents } from "@/lib/sanity/client";

export default async function MinimalHomePage() {
  const events = await getAllEvents();
  return <HomeTwoCol events={events} />;
}

// export const revalidate = 60;
