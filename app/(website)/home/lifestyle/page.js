import HomeLifeStyle from "./lifestyle";

import { getAllPosts } from "@/lib/sanity/client";

export default async function LifeStyleHomePage() {
  const posts = await getAllPosts();
  return <HomeLifeStyle posts={posts} />;
}

// export const revalidate = 60;
