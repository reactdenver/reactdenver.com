import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "speaker",
      title: "Speaker",
      type: "reference",
      to: { type: "speaker" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "eventAt",
      title: "Event Date",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
    defineField({
      name: "titoSlug",
      title: "Tito Slug",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "host",
      title: "Host",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Google maps address (https://google.com/maps...)",
      type: "string",
    }),
  ],

  preview: {
    select: {
      title: "title",
      speaker: "spaker.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { speaker } = selection;
      return { ...selection, subtitle: speaker && `by ${speaker}` };
    },
  },
});
