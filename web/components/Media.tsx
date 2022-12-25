import { urlFor } from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../libs/services/src/lib/getClient";
import { styled } from "@portfolio-audiophile/styles";

const Image = styled("img", {
  width: "100%",
});

const Media = ({ image }) => {
  if (!image) return null;
  const builder = imageUrlBuilder(sanityClient);
  const builtImage = builder.image(image);
  return (
    <Image
      src={urlFor(image).auto("format").fit("min").url()}
      alt={image.alt}
    />
  );
};

export default Media;
