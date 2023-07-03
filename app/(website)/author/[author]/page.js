import Author from "./author";

import { getAllAuthorsSlugs, getAuthorPostsBySlug } from "@/lib/sanity/client";

export async function generateStaticParams() {
  return await getAllAuthorsSlugs();
}

async function getAuthor(slug) {
  const posts = await getAuthorPostsBySlug(slug);
  return posts?.[0]?.author || {};
}

export async function generateMetadata({ params }) {
  const author = await getAuthor(params.author);
  return { title: author.title };
}

export default async function AuthorPage({ params }) {
  const posts = await getAuthorPostsBySlug(params.author);
  const author = await getAuthor(params.author);
  return <Author posts={posts} author={author} />;
}

// export const revalidate = 60;
