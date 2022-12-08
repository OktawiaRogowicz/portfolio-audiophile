export default {
  name: "footer",
  title: "Footer",
  type: "document",
  preview: {
    prepare: () => ({ title: "Footer" }),
  },
  fields: [
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      name: "copyright",
      title: "Copyright",
      type: "blockContent",
    },
    {
      name: "socialMedia",
      title: "Social media",
      type: "array",
      of: [
        {
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            {
              name: "logo",
              title: "Logo",
              type: "media",
            },
          ],
        },
      ],
    },
  ],
};
