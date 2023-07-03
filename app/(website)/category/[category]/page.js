import Category from "./category";

import { getAllCategories, getPostsByCategory } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllCategories();
}
async function getCategoryPosts(category) {
  const posts = await getPostsByCategory(category);
  const title = posts[0]?.categories.filter(
    (e) => e.slug.current === category
  )[0]?.title;
  return { title, posts };
}

export async function generateMetadata({ params }) {
  const data = await getCategoryPosts(params.category);
  return { title: data.title };
}

export default async function PostDefault({ params }) {
  const data = await getCategoryPosts(params.category);
  const { title, posts } = data;
  return <Category posts={posts} title={title} />;
}

// export const revalidate = 60;
