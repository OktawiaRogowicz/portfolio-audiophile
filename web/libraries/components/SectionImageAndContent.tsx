import { FC } from "react";
import { styled } from "../styles/stitches";
import { SectionWrapper } from "./SectionWrapper";
import Media from "./Media";
import { PortableText } from "@portabletext/react";
import { SiteConfiguration } from "../models/site-configuration";

const Root = styled("div", {
  display: "grid",
  gridAutoFlow: "rows",
  gap: "$40",
  "@md": {
    gap: "$64",
  },
  "@lg": {
    gridAutoFlow: "columns",
    gridTemplateColumns: "1fr 1fr",
    gap: "$120",
  },
});

const ContentContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: "$32",
  order: 2,
  textAlign: "center",
  "@lg": {
    order: 1,
    textAlign: "left",
  },
});

const Title = styled("div", {
  projectFont: "heading02",
  "@lg": {
    paddingTop: "$108",
  },
});

const Description = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

const Image = styled("div", {
  order: 1,
  img: {
    borderRadius: "10px",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  "@lg": {
    order: 2,
  },
});

export type SectionImageAndContentProps = {
  sectionImageAndContentSettings: SiteConfiguration["siteConfiguration"]["sectionImageAndContent"];
};

export const SectionImageAndContent: FC<SectionImageAndContentProps> = ({
  sectionImageAndContentSettings,
}) => {
  return (
    <SectionWrapper margin={"M"}>
      <Root>
        <ContentContainer>
          <Title>{sectionImageAndContentSettings.title}</Title>
          <Description>
            <PortableText value={sectionImageAndContentSettings.description} />
          </Description>
        </ContentContainer>
        <Image>
          <Media image={sectionImageAndContentSettings.image.image} />
        </Image>
      </Root>
    </SectionWrapper>
  );
};
