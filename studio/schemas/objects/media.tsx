import React from "react";

// const Preview = ({ imageSrc }: { imageSrc: string }) => (
//     <div
//         style={{
//             display: 'flex',
//             background: '#F1F3F6',
//             alignItems: 'center',
//             justifyContent: 'center',
//             width: 35,
//             height: 35,
//             maxHeight: '100%',
//         }}
//     >
//         <img style={{ width: '100%', height: 'auto' }} src={imageSrc} alt="" />
//     </div>
// )

export default {
  name: "media",
  type: "object",
  preview: {
    select: {
      title: "image.asset.originalFilename",
      imageUrl: `image.asset.url`,
    },
    prepare(selection) {
      const { title, imageUrl } = selection;
      return {
        title,
        media: <img alt={title} src={imageUrl} />,
      };
    },
  },
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "overrideMobileImage",
      title: "Override mobile image?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "mobileImage",
      title: "Mobile image",
      type: "image",
      hidden: ({ parent }) => parent?.overrideMobileImage === false,
      options: {
        hotspot: true,
      },
    },
  ],
};
