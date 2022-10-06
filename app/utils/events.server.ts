import { getEventMdxListItems } from "./mdx";

export async function getEventsJson() {
  const posts = await getEventMdxListItems();

  return Promise.resolve([
    {
      id: "2022-10-18",
      slug: "2022-10-18",
      title: "Future Talk",
      description: "Placeholder description",
      location: "1595 Wynkoop St, Denver, CO 80202",
      speakers: [{ name: "John Doe" }],
      date: new Date("2022-10-18"),
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=480&q=80",
    },
    {
      id: "2022-09-20",
      slug: "2022-09-20",
      title: "Development Workflow",
      description: "Kyle has something really cool about workflows",
      location: "1595 Wynkoop St, Denver, CO 80202",
      speakers: [{ name: "Kyle Coberky" }],
      date: new Date("2022-09-20"),
      image:
        "https://cdn.discordapp.com/attachments/915388749163159552/1021962064467595385/PXL_20220921_002706189.jpg",
    },
    {
      id: "2022-08-16",
      slug: "2022-08-16",
      title: "Testing Javascript - The why, not the how",
      description:
        'From the beginning we are always told that we need to test our code. We\'re given large examples and tons of libraries. But the answer to why is always something like, "We should" or "Because we have to know if there are bugs". Let\'s talk about the real reasons behind testing, and why testing can and will ultimately save you time and frustration in the future.',
      location: "1595 Wynkoop St, Denver, CO 80202",
      speakers: [
        {
          name: "Jeff Baumgardt",
          twitter: "https://twitter.com/JeffBaumgardt",
          github: "https://github.com/JeffBaumgardt",
        },
      ],
      date: new Date("2022-08-16"),
      image:
        "https://cdn.discordapp.com/attachments/915388749163159552/1009960553978019941/IMG_6518.jpg",
    },
  ]);

  // return posts.map((post) => {
  //   const {
  //     slug,
  //     frontmatter: { title, description, location, speakers, date },
  //   } = post;
  //   return {
  //     id: slug,
  //     slug,
  //     title,
  //     description,
  //     location,
  //     speakers,
  //     date
  //   };
  // });
}
