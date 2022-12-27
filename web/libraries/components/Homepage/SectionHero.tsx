import { FC } from "react";
import { styled } from "../../styles/stitches";
import { PortableText } from "@portabletext/react";
import { SiteConfiguration } from "../../models/site-configuration";
import Media from "../Media";
import { Link } from "../Link";

const Root = styled("div", {
  height: "620px",
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridAutoFlow: "rows",
  alignItems: "center",
});

const ContentContainer = styled("div", {
  display: "grid",
  gap: "$24",
  maxWidth: "$maxWidthS",
});

const Heading = styled("div", {
  display: "grid",
  gap: "$16",
});

const Subtitle = styled("div", {
  projectFont: "overline",
  color: "$orange",
});

const Title = styled("div", {
  projectFont: "heading02",
  color: "$white",
});

const Description = styled("div", {
  display: "grid",
  justifyContent: "center",
  projectFont: "body01",
  color: "$white",
  maxWidth: "$maxWidthXXS",
  "@lg": {
    justifyContent: "left",
  },
});

const BackgroundImage = styled("div", {
  position: "absolute",
  zIndex: "0",
  top: 0,
  left: 0,
  right: 0,
  height: "729px",
  img: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

export type SectionHeroProps = {
  sectionHeroSettings: SiteConfiguration["siteConfiguration"]["sectionHero"];
};

export const SectionHero: FC<SectionHeroProps> = ({ sectionHeroSettings }) => {
  console.log("sectionHeroSettings: ", sectionHeroSettings);
  return (
    <>
      <BackgroundImage>
        <Media
          image={sectionHeroSettings.product.sectionImages.heroImage.image}
        />
      </BackgroundImage>
      <Root>
        <ContentContainer>
          {sectionHeroSettings.product.isNewProduct && (
            <Subtitle>New Product</Subtitle>
          )}
          <Title>{sectionHeroSettings.product.name}</Title>
          {sectionHeroSettings.description && (
            <Description>
              <PortableText value={sectionHeroSettings.description} />
            </Description>
          )}
          <Link
            appearance={"primary"}
            href={`/${sectionHeroSettings.product.href}`}
          >
            See product
          </Link>
        </ContentContainer>
      </Root>
    </>
  );
};
