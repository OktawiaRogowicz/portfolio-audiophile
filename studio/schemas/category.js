import { MdOutlineCategory } from "react-icons/md";

export default {
  name: "category",
  title: "Category",
  type: "document",
  icon: MdOutlineCategory,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "media",
    },
    {
      title: "You might also like",
      name: "recommendations",
      type: "array",
      of: [
        {
          title: "Recommendation",
          name: "recommendation",
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image.image.asset",
    },
  },
};
