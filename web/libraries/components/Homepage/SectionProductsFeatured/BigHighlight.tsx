import { FC } from "react";
import { styled } from "../../../styles/stitches";
import { SiteConfiguration } from "../../../models/site-configuration";
import { PortableText } from "@portabletext/react";
import { Link } from "../../Link";
import { Highlight } from "./Highlight";
import Media from "../../Media";
import { PatternCircles } from "../../../icons/PatternCircles";

const Root = styled(Highlight, {
  minHeight: "600px",
  display: "grid",
  backgroundColor: "$orange",
  borderRadius: "10px",
  position: "relative",
  overflow: "hidden",
  gridTemplateRows: "1fr 1fr",
  justifyContent: "center",
  alignItems: "center",
  "@md": {
    minHeight: "720px",
  },
  "@lg": {
    minHeight: "560px",
    gap: "$120",
    paddingTop: "$120",
    gridTemplateRows: "none",
    gridTemplateColumns: "1fr 1fr",
  },
});

const ImagesContainer = styled("div", {
  height: "100%",
});

const ImageContainer = styled("div", {
  position: "relative",
  height: "100%",
  width: "100%",
  img: {
    zIndex: "2",
    position: "absolute",
    height: "100%",
    width: "100%",
    objectFit: "contain",
    top: "5%",
    maxHeight: "240px",
    right: "0%",
    "@lg": {
      top: "auto",
      bottom: "-$120",
      maxHeight: "560px",
    },
  },
});

const Circles = styled("div", {
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  svg: {
    transform: "scale(0.5) translateY(-65%)",
    zIndex: "1",
    top: "200%",
    bottom: "auto",
    "@lg": {
      right: "auto",
      transform: "scale(1.2)",
      top: "auto",
    },
  },
});

const ContentContainer = styled("div", {
  zIndex: "3",
  display: "grid",
  gridTemplateRows: "auto auto",
  height: "fit-content",
  gap: "$40",
  maxWidth: "$maxWidthXXS",
  textAlign: "center",
  a: {
    placeSelf: "center",
  },
  "@lg": {
    textAlign: "left",
    a: {
      placeSelf: "left",
    },
  },
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
