import HomePage from "./minimal";

import { getAllPosts } from "@/lib/sanity/client";

export default async function MinimalHomePage() {
  const posts = await getAllPosts();
  return <HomePage posts={posts} />;
}

// export const revalidate = 60;
