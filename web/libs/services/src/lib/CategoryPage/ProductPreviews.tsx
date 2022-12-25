import { FC } from "react";
import { ProductPreview } from "./ProductPreview";
import { styled } from "@stitches/react";
export type ProductPreviewsProps = {
  products: any;
};

const Root = styled("div", {
  display: "grid",
  gap: "$120",
  "@lg": {
    gap: "$160",
  },
});

export const ProductPreviews: FC<ProductPreviewsProps> = ({ products }) => {
  return (
    <Root>
      {products &&
        products.length > 0 &&
        products.map((product, index) => {
          return <ProductPreview product={product} position={index % 2} />;
        })}
    </Root>
  );
};
