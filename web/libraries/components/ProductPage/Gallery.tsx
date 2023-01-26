import { FC } from "react";
import { styled } from "../../styles/stitches";
import Media from "../Media";
import { SectionWrapper } from "../SectionWrapper";
import { ProductType } from "../../models/productType";

export type GalleryProps = {
  product: ProductType;
};

const Root = styled("div", {
  display: "grid",
  gap: "$20",
  "@md": {
    gridTemplateColumns: "3fr 4fr",
    boxSizing: "border-box",
  },
});

const TwoImages = styled("div", {
  display: "grid",
  gap: "$20",
  gridTemplateRows: "1fr 1fr",
  maxHeight: "100%",
  boxSizing: "border-box",
});

const Image = styled("div", {
  borderRadius: "$r1",
  display: "grid",
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
});

export const Gallery: FC<GalleryProps> = ({ product }) => {
  return (
    <SectionWrapper margin={"M"}>
      <Root>
        <TwoImages>
          <Image>
            <Media image={product.gallery[0].image} />
          </Image>
          <Image>
            <Media image={product.gallery[1].image} />
          </Image>
        </TwoImages>
        <Image>
          <Media image={product.gallery[2].image} />
        </Image>
      </Root>
    </SectionWrapper>
  );
};
