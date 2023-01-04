import { styled } from "../../styles/stitches";
import React, { FC } from "react";
import { DetailsContainer } from "./DetailsContainer";
import { CartContainer } from "./CartContainer";
import { Product } from "../../models/product";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 350px",
  gap: "$32",
});

export type CheckoutProps = {
  products: Product[];
};

export const CheckoutContainer: FC<CheckoutProps> = ({ products }) => {
  return (
    <Root>
      <DetailsContainer />
      <CartContainer products={products} />
    </Root>
  );
};
