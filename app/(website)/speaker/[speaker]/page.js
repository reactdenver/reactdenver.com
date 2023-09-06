import Speaker from "./speaker";

import {
  getAllSpeakersSlugs,
  getSpeakerEventsBySlug,
} from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllSpeakersSlugs();
}

async function getSpeaker(slug) {
  const events = await getSpeakerEventsBySlug(slug);
  return events?.[0]?.speaker || {};
}

export async function generateMetadata({ params }) {
  const speaker = await getSpeaker(params.speaker);
  return { title: speaker.title };
}

export default async function SpeakerPage({ params }) {
  const events = await getSpeakerEventsBySlug(params.speaker);
  const speaker = await getSpeaker(params.speaker);
  return <Speaker events={events} speaker={speaker} />;
}

// export const revalidate = 60;
