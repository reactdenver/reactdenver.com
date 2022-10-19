import { getEventMdxListItems, getMdxPage } from "./mdx";

export async function getEventsJson() {
  const posts = await getEventMdxListItems();

  return posts.map((post) => {
    const {
      slug,
      frontmatter: { title, description, location, speakers, date },
    } = post;
    return {
      id: slug,
      slug,
      title,
      description,
      location,
      speakers,
      date,
    };
  });
}

export async function getEventJson(slug: string) {
  return getMdxPage("events", slug);
}
