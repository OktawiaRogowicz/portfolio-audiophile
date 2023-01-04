import { DEFAULT_LOCALE_ID } from "./locale/String";

export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "isNewProduct",
      title: "Is new product?",
      type: "boolean",
      initialValue: false,
    },
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
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "media",
    },
    {
      name: "sectionImages",
      title: "Section Images",
      type: "object",
      fields: [
        {
          name: "heroImage",
          title: "Hero image",
          description:
            "Image used if product is chosen to be in Section Hero (homepage)",
          type: "media",
        },
        {
          name: "bigHighlight",
          title: "Big highlight image",
          description:
            "Image used if product is chosen to be in Section Products Features: Big highlight (homepage)",
          type: "media",
        },
        {
          name: "mediumHighlight",
          title: "Medium highlight image",
          description:
            "Image used if product is chosen to be in Section Products Features: Medium highlight (homepage)",
          type: "media",
        },
        {
          name: "smallHighlight",
          title: "Small highlight image",
          description:
            "Image used if product is chosen to be in Section Products Features: Small highlight (homepage)",
          type: "media",
        },
      ],
    },
    {
      name: "productDescription",
      title: "Product description",
      type: "blockContent",
    },
    {
      name: "featuresDescription",
      title: "Features description",
      type: "blockContent",
    },
    {
      name: "inTheBox",
      title: "In the box",
      type: "array",
      of: [
        {
          name: "item",
          title: "In the box item",
          type: "object",
          preview: {
            select: {
              title: `title.${DEFAULT_LOCALE_ID}`,
              subtitle: "quantity",
            },
          },
          fields: [
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "gallery",
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
