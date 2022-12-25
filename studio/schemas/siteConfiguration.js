export default {
  name: "siteConfiguration",
  title: "Site configuration",
  type: "document",
  fields: [
    {
      name: "sectionImageAndContent",
      title: "Section Image and Content",
      type: "object",
      fields: [
        {
          name: "title",
          title: "title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "blockContent",
        },
        {
          name: "image",
          title: "Image",
          type: "media",
        },
      ],
    },
    {
      name: "miniCategories",
      title: "Mini categories",
      type: "array",
      of: [
        {
          title: "Category",
          name: "category",
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
  ],
};
