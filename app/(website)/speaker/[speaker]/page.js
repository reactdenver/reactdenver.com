import Speaker from "./speaker";

import { getAllSpeakersSlugs, getSpeakerPostsBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllSpeakersSlugs();
}

async function getSpeaker(slug) {
  const posts = await getSpeakerPostsBySlug(slug);
  return posts?.[0]?.speaker || {};
}

export async function generateMetadata({ params }) {
  const speaker = await getSpeaker(params.speaker);
  return { title: speaker.title };
}

export default async function SpeakerPage({ params }) {
  const posts = await getSpeakerPostsBySlug(params.speaker);
  const speaker = await getSpeaker(params.speaker);
  return <Speaker posts={posts} speaker={speaker} />;
}

// export const revalidate = 60;
