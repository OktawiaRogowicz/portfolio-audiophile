import { FC } from "react";
import { styled } from "@portfolio-audiophile/styles";
import Media from "../../../../components/Media";
import { ArrowIcon } from "../../../../icons/ArrowIcon";
import { Link } from "./Link";
import { SectionWrapper } from "./SectionWrapper";

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
  padding: "0 $24 $24 $24",
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
  "@md": {},
  "@lg": {
    padding: "0 $32 $32 $32",
  },
});

const ContentContainer = styled("div", {
  display: "grid",
  gap: "$16",
});

const MiniCategoryImage = styled("div", {
  img: {
    maxHeight: "$160",
    objectFit: "contain",
  },
});

export type CategoriesMiniProps = {
  miniCategories: any;
};

export const CategoriesMini: FC<CategoriesMiniProps> = ({ miniCategories }) => {
  return (
    <SectionWrapper>
      <Root>
        {miniCategories?.length > 0 &&
          miniCategories.map((item) => {
            return (
              <MiniCategoryContainer>
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
