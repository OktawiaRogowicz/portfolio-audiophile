import { FC } from "react";
import { ProductPreview } from "./ProductPreview";
import { SectionWrapper } from "../SectionWrapper";
import { styled } from "../../styles/stitches";
import { ProductType } from "../../models/productType";
export type ProductPreviewsProps = {
  products: ProductType[];
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
            return (
              <ProductPreview
                key={`productPreview-${index}`}
                product={product}
                position={index % 2}
              />
            );
          })}
      </Root>
    </SectionWrapper>
  );
};
