import { FC } from "react";
import { styled } from "../../styles/stitches";
import { PortableText } from "@portabletext/react";
import { Container } from "../Container";
import Media from "../Media";
import { Link } from "../Link";
import { FooterMenu } from "./FooterMenu";

const Root = styled("div", {
  display: "grid",
  maxWidth: "100%",
  minWidth: "100%",
  position: "relative",
  padding: "$40 0 $48 0",
  backgroundColor: "$black",
  justifyContent: "center",
  alignItems: "center",
  gap: "$48",
  "@md": {
    justifyContent: "center",
    gap: "$32",
    padding: "$56 0 $48 0",
  },
});

const OrangeLine = styled("div", {
  position: "absolute",
  height: "$4",
  width: "100px",
  backgroundColor: "$orange",
  top: "0",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "@md": {
    left: "$containerMarginTablet",
    transform: "none",
  },
  "@lg": {
    left: "$containerMarginDesktop",
  },
});

const ContentContainer = styled("div", {
  position: "relative",
  display: "grid",
  alignItems: "center",
  gap: "$48",
});

const Description = styled("div", {
  display: "grid",
  gap: "$56",
  projectFont: "body01",
  maxWidth: "$maxWidthS",
  textAlign: "center",
  "@md": {
    gap: "$80",
    maxWidth: "none",
    textAlign: "left",
  },
});

const SocialMediaContainer = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "$16",
  justifyContent: "center",
  alignItems: "center",
  "@md": {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
});

export type FooterProps = {
  header: any;
  footer: {
    description: any;
    copyright: any;
    socialMedia: any;
  };
};

export const Footer: FC<FooterProps> = ({ header, footer }) => {
  return (
    <Root>
      {/*<OrangeLine />*/}
      <FooterMenu header={header} />
      <Container backgroundColor={"black"}>
        <ContentContainer>
          <Description>
            <PortableText value={footer.description} />
            <PortableText value={footer.copyright} />
          </Description>
          <SocialMediaContainer>
            {footer.socialMedia.map((item) => {
              return (
                <Link href={"/test"}>
                  <Media image={item.logo.image} />
                </Link>
              );
            })}
          </SocialMediaContainer>
        </ContentContainer>
      </Container>
    </Root>
  );
};
