import HomeTwoCol from "./two-col";

import { getAllPosts } from "@/lib/sanity/client";

export default async function MinimalHomePage() {
  const posts = await getAllPosts();
  return <HomeTwoCol posts={posts} />;
}

// export const revalidate = 60;
