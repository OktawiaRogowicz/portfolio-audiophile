export default {
  name: "header",
  title: "Header",
  type: "document",
  preview: {
    prepare: () => ({ title: "Header" }),
  },
  fields: [
    {
      name: "logo",
      title: "Logo",
      type: "media",
    },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
    },
  ],
};
