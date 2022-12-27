import { FC } from "react";
import { ProductPreview } from "./ProductPreview";
import { styled } from "@stitches/react";
import { SectionWrapper } from "../SectionWrapper";
export type ProductPreviewsProps = {
  products: any;
};

const Root = styled("div", {
  display: "grid",
  gap: "$120 0",
  "@lg": {
    gap: "$160 0",
  },
});

export const ProductPreviews: FC<ProductPreviewsProps> = ({ products }) => {
  return (
    <SectionWrapper>
      <Root>
        {products &&
          products.length > 0 &&
          products.map((product, index) => {
            return <ProductPreview product={product} position={index % 2} />;
          })}
      </Root>
    </SectionWrapper>
  );
};
