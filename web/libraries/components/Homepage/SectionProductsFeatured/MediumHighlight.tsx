import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SiteConfiguration } from "../../../models/site-configuration";
import { Highlight } from "./Highlight";
import Media from "../../Media";
import { Link } from "../../Link";

const Root = styled("div", {
  minHeight: "320px",
  position: "relative",
  borderRadius: "10px",
  overflow: "hidden",
  display: "grid",
  alignItems: "center",
  img: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

const Container = styled(Highlight, {
  display: "grid",
  gap: "$32",
});

const Title = styled("h4", {
  projectFont: "heading04",
});

export type MediumHighlightProps = {
  productsFeatured: SiteConfiguration["siteConfiguration"]["sectionProductsFeatured"];
};

export const MediumHighlight: FC<MediumHighlightProps> = ({
  productsFeatured,
}) => {
  if (!productsFeatured.mediumHighlight) return null;
  return (
    <Root>
      <Container>
        <Title>{productsFeatured.mediumHighlight.name}</Title>
        <Link
          appearance={"secondary"}
          href={productsFeatured.mediumHighlight.slug.current}
        >
          See product
        </Link>
      </Container>
      <Media
        image={
          productsFeatured.mediumHighlight.sectionImages.mediumHighlight.image
        }
      />
    </Root>
  );
};
