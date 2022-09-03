import { getEventMdxListItems } from "./mdx";

async function getPostJson() {
  const posts = await getEventMdxListItems();

  return posts.map((post) => {
    const {
      slug,
      frontmatter: { title, description, location, speakers },
    } = post;
    return {
      id: slug,
      slug,
      title,
      description,
      location,
      speakers,
    };
  });
}
