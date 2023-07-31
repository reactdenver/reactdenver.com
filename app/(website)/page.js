import HomePage from "./home";
import { getAllEvents } from "@/lib/sanity/client";

export default async function IndexPage() {
  const events = await getAllEvents();
  return <HomePage events={events} />;
}

// export const revalidate = 60;
