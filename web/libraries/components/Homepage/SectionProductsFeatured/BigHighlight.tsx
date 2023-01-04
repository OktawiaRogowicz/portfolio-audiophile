import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SiteConfiguration } from "../../../models/site-configuration";
import { PortableText } from "@portabletext/react";
import { Link } from "../../Link";
import { Highlight } from "./Highlight";
import Media from "../../Media";
import { PatternCircles } from "../../../icons/PatternCircles";

const Root = styled(Highlight, {
  paddingTop: "$120",
  display: "grid",
  gap: "$120",
  gridTemplateColumns: "1fr 1fr",
  backgroundColor: "$orange",
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
});

const ImagesContainer = styled("div", {});

const ImageContainer = styled("div", {
  img: {
    zIndex: "2",
    position: "absolute",
    bottom: "-5%",
    maxHeight: "420px",
    height: "100%",
    width: "100%",
    objectFit: "contain",
    right: "20%",
  },
});

const Circles = styled("div", {
  svg: {
    transform: "scale(1.2)",
    zIndex: "1",
    position: "absolute",
    bottom: "-75%",
    right: "27.5%",
  },
});

const ContentContainer = styled("div", {
  zIndex: "3",
  display: "grid",
  gridTemplateRows: "auto auto",
  height: "fit-content",
  gap: "$40",
  maxWidth: "$maxWidthXXS",
});

const TextContainer = styled("div", {
  display: "grid",
  gap: "$24",
  color: "$white",
});

const Title = styled("div", {
  projectFont: "heading02",
});

const Description = styled("div", {
  projectFont: "body01",
});

export type BigHighlightProps = {
  productsFeatured: SiteConfiguration["siteConfiguration"]["sectionProductsFeatured"];
};

export const BigHighlight: FC<BigHighlightProps> = ({ productsFeatured }) => {
  console.log("productsFeatured: ", productsFeatured);
  if (!productsFeatured.bigHighlight) return null;
  return (
    <Root>
      <ImagesContainer>
        <ImagesContainer>
          <ImageContainer>
            <Media
              image={
                productsFeatured.bigHighlight.sectionImages.bigHighlight.image
              }
            />
            <Circles>
              <PatternCircles />
            </Circles>
          </ImageContainer>
        </ImagesContainer>
      </ImagesContainer>
      <ContentContainer>
        <TextContainer>
          {productsFeatured.bigHighlight.name && (
            <Title>{productsFeatured.bigHighlight.name}</Title>
          )}
          {productsFeatured.description && (
            <Description>
              <PortableText value={productsFeatured.description} />
            </Description>
          )}
        </TextContainer>
        <Link
          appearance={"tertiary"}
          href={`/product/${productsFeatured.bigHighlight.slug.current}`}
        >
          See product
        </Link>
      </ContentContainer>
    </Root>
  );
};
