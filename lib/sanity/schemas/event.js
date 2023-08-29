export default {
  name: "event",
  title: "Event",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "excerpt",
      title: "Excerpt",
      description:
        "The excerpt is used in blog feeds, and also for search results",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "speaker",
      title: "Speaker",
      type: "reference",
      to: { type: "speaker" },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      fields: [
        // {
        //   name: "caption",
        //   type: "string",
        //   title: "Image caption",
        //   description: "Appears below image.",

        // },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
        },
      ],
      options: {
        hotspot: true,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "eventAt",
      title: "Event Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titoSlug",
      title: "Tito Slug",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: "title",
      speaker: "speaker.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { speaker } = selection;
      return Object.assign({}, selection, {
        subtitle: speaker && `by ${speaker}`,
      });
    },
  },
};
