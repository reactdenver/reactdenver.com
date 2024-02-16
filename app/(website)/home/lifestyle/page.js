import HomeLifeStyle from "./lifestyle";

import { getAllEvents } from "@/lib/sanity/client";

export default async function LifeStyleHomePage() {
  const events = await getAllEvents();
  return <HomeLifeStyle events={events} />;
}

export const revalidate = 60;
