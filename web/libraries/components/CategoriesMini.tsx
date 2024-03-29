import { FC } from "react";
import Media from "./Media";
import { ArrowIcon } from "../icons/ArrowIcon";
import { Link } from "./Link";
import { SectionWrapper, SectionWrapperMarginType } from "./SectionWrapper";
import { styled } from "../styles/stitches";
import { SiteConfiguration } from "../models/site-configuration";

const Root = styled("div", {
  display: "grid",
  projectFont: "heading06",
  color: "$black",
  gridTemplateRows: "1fr 1fr 1fr",
  gridTemplateColumns: "none",
  gap: "$16",
  "@md": {
    gridTemplateRows: "none",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "$8",
  },
  "@lg": {
    gap: "$32",
  },
});

const MiniCategoryContainer = styled("div", {
  position: "relative",
  zIndex: 1,
  display: "grid",
  gridAutoFlow: "rows",
  textAlign: "center",
  padding: "0 $16 $16 $16",
  a: {
    placeSelf: "center",
    color: "$black05",
  },
  "&:after": {
    content: "",
    position: "absolute",
    zIndex: -1,
    height: "75%",
    width: "100%",
    bottom: 0,
    backgroundColor: "$gray",
    borderRadius: "10px",
  },
  "@lg": {
    padding: "0 $32 $32 $32",
  },
});

const ContentContainer = styled("div", {
  display: "grid",
  gap: "$4",
});

const MiniCategoryImage = styled("div", {
  img: {
    maxHeight: "$96",
    objectFit: "contain",
    "@md": {
      maxHeight: "$160",
    },
  },
});

export type CategoriesMiniProps = {
  margin?: SectionWrapperMarginType;
  miniCategories: SiteConfiguration["siteConfiguration"]["miniCategories"];
};

export const CategoriesMini: FC<CategoriesMiniProps> = ({
  margin,
  miniCategories,
}) => {
  return (
    <SectionWrapper margin={margin}>
      <Root>
        {miniCategories?.length > 0 &&
          miniCategories.map((item, index) => {
            return (
              <MiniCategoryContainer key={`miniCategoryContainer-${index}`}>
                <MiniCategoryImage>
                  <Media image={item.link.image.image} />
                </MiniCategoryImage>
                <ContentContainer>
                  {item.link.name}
                  <Link
                    appearance={"plain"}
                    href={`/category/${item.link.href}`}
                  >
                    Shop
                    <ArrowIcon />
                  </Link>
                </ContentContainer>
              </MiniCategoryContainer>
            );
          })}
      </Root>
    </SectionWrapper>
  );
};
