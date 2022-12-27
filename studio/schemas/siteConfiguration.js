export default {
  name: "siteConfiguration",
  title: "Site configuration",
  type: "document",
  preview: {
    prepare: () => ({ title: "Site configuration" }),
  },
  fields: [
    {
      name: "sectionHero",
      title: "Section Hero",
      type: "object",
      fields: [
        {
          name: "description",
          title: "Description",
          type: "blockContent",
        },
        {
          title: "Product",
          name: "product",
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
    {
      name: "sectionProductsFeatured",
      title: "Section Products Featured",
      type: "object",
      fields: [
        {
          title: "Big highlight",
          name: "bigHighlight",
          type: "reference",
          to: [{ type: "product" }],
        },
        {
          name: "description",
          title: "Big highlight description",
          type: "blockContent",
        },
        {
          title: "Medium highlight",
          name: "mediumHighlight",
          type: "reference",
          to: [{ type: "product" }],
        },
        {
          title: "Small highlight",
          name: "smallHighlight",
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
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
