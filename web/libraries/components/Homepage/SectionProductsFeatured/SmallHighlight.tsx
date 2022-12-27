import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SiteConfiguration } from "../../../models/site-configuration";
import { Highlight } from "./Highlight";
import { Link } from "../../Link";
import Media from "../../Media";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$32",
});

const ImageContainer = styled("div", {
  borderRadius: "10px",
  overflow: "hidden",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

const Container = styled(Highlight, {
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: "$gray",
  display: "grid",
  gap: "$32",
});

const Title = styled("h4", {
  projectFont: "heading04",
});

export type SmallHighlightProps = {
  productsFeatured: SiteConfiguration["siteConfiguration"]["sectionProductsFeatured"];
};

export const SmallHighlight: FC<SmallHighlightProps> = ({
  productsFeatured,
}) => {
  if (!productsFeatured.smallHighlight) return null;
  return (
    <Root>
      <ImageContainer>
        <Media
          image={
            productsFeatured.smallHighlight.sectionImages.smallHighlight.image
          }
        />
      </ImageContainer>
      <Container>
        <Title>{productsFeatured.smallHighlight.name}</Title>
        <Link
          appearance={"secondary"}
          href={productsFeatured.smallHighlight.slug.current}
        >
          {productsFeatured.smallHighlight.slug.current}
        </Link>
      </Container>
    </Root>
  );
};
