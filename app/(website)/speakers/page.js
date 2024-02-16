import { getAllSpeakers, getSettings } from "@/lib/sanity/client";
import Speakers from "./speakers";

export default async function SpeakersPage() {
  const speakers = await getAllSpeakers();
  const settings = await getSettings();
  return <Speakers settings={settings} speakers={speakers} />;
}

export const revalidate = 60;
