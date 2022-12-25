import { FC } from "react";
import { styled } from "@portfolio-audiophile/styles";
import Media from "../../../../components/Media";
import { StyledClickable } from "./StyledClickable";
import { ArrowIcon } from "../../../../icons/ArrowIcon";
import { Link } from "./Link";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "$32",
  projectFont: "heading06",
  color: "$black",
});

const MiniCategoryContainer = styled("div", {
  position: "relative",
  zIndex: 1,
  display: "grid",
  gap: "$16",
  gridAutoFlow: "rows",
  textAlign: "center",
  padding: "0 $32 $32 $32",
  a: {
    placeSelf: "center",
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
    <Root>
      {miniCategories?.length > 0 &&
        miniCategories.map((item) => {
          return (
            <MiniCategoryContainer>
              <MiniCategoryImage>
                <Media image={item.link.image.image} />
              </MiniCategoryImage>
              {item.link.name}
              <Link appearance={"plain"} href={`/category/${item.link.href}`}>
                Shop
                <ArrowIcon />
              </Link>
            </MiniCategoryContainer>
          );
        })}
    </Root>
  );
};
