import { type } from "os";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "jobtitle",
      title: "Jobtitle",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "jobtitle",
        maxLength: 96,
      },
    }),
    defineField({
      name: "companyname",
      title: "Companyname",
      type: "string",
    }),
    defineField({
      name: "companyimage",
      title: "Companyimage",
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
      name: "technologies",
      title: "Technologies",
      type: "array",
      of:[{type:'reference', to:[{type:'skills'}]}]
    }),
    defineField({
      name: "date_started",
      title: "DateStarted",
      type: "datetime",
    }),
    defineField({
      name: "date_ended",
      title: "DateEnded",
      type: "datetime",
    }),
    defineField({
      name: "isCurrently",
      title: "IsCurrently",
      type: "boolean",
    }),
  ],
});
