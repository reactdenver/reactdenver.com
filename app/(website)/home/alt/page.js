import AltHome from "./alternate";

import { getAllEvents } from "@/lib/sanity/client";

export default async function AltHomePage() {
  const events = await getAllEvents();
  return <AltHome events={events} />;
}

// export const revalidate = 60;
