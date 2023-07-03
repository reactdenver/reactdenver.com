import AltHome from "./alternate";

import { getAllPosts } from "@/lib/sanity/client";

export default async function AltHomePage() {
  const posts = await getAllPosts();
  return <AltHome posts={posts} />;
}

// export const revalidate = 60;
