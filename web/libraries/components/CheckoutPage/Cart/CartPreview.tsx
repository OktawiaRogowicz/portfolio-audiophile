import { styled } from "../../../styles/stitches";
import React, { FC } from "react";
import { Product } from "../../../models/product";
import { CartProductPreview } from "./CartProductPreview";

const Root = styled("div", {
  projectFont: "body01",
});

const CartProductsPreview = styled("div", {
  display: "grid",
  gap: "$24",
});

export type CartPreviewProps = {
  products: Product[];
};

export const CartPreview: FC<CartPreviewProps> = ({ products = [] }) => {
  return (
    <Root>
      <CartProductsPreview>
        {products.length > 0 ? (
          products.map((product) => {
            return <CartProductPreview variant={"big"} product={product} />;
          })
        ) : (
          <div>Your cart is empty</div>
        )}
      </CartProductsPreview>
    </Root>
  );
};
