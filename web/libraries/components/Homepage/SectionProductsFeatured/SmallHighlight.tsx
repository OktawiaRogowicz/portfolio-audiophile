import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SiteConfiguration } from "../../../models/site-configuration";
import { Highlight } from "./Highlight";
import { Link } from "../../Link";
import Media from "../../Media";

const Root = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  gap: "$24",
  "@md": {
    gridTemplateRows: "none",
    gridTemplateColumns: "1fr 1fr",
    gap: "$12",
  },
  "@lg": {
    gap: "$32",
  },
});

const ImageContainer = styled("div", {
  height: "200px",
  borderRadius: "10px",
  overflow: "hidden",
  display: "grid",
  alignItems: "center",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  "@md": {
    height: "320px",
  },
});

const Container = styled(Highlight, {
  height: "200px",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundColor: "$gray",
  gap: "$32",
  display: "grid",
  alignItems: "center",
  "@md": {
    height: "320px",
  },
});

const TextContainer = styled("div", {
  gap: "$32",
  display: "grid",
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
        <TextContainer>
          <Title>{productsFeatured.smallHighlight.name}</Title>
          <Link
            appearance={"secondary"}
            href={productsFeatured.smallHighlight.slug.current}
          >
            See product
          </Link>
        </TextContainer>
      </Container>
    </Root>
  );
};
