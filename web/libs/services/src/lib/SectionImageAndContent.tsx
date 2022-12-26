import { FC } from "react";
import { styled } from "@portfolio-audiophile/styles";
import { SectionWrapper } from "./SectionWrapper";
import Media from "../../../../components/Media";
import SanityBlockContent from "@sanity/block-content-to-react";
import { SiteConfiguration } from "./models/site-configuration";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$120",
});

const ContentContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: "$32",
});

const Title = styled("div", {
  paddingTop: "$108",
  projectFont: "heading02",
});

const Description = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

const Image = styled("div", {
  img: {
    borderRadius: "10px",
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
            <SanityBlockContent
              blocks={sectionImageAndContentSettings.description}
            />
          </Description>
        </ContentContainer>
        <Image>
          <Media image={sectionImageAndContentSettings.image.image} />
        </Image>
      </Root>
    </SectionWrapper>
  );
};
