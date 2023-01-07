import { styled } from "../../styles/stitches";
import React, { FC } from "react";
import { DetailsContainer } from "./DetailsContainer";
import { CartContainer } from "./CartContainer";

const Root = styled("div", {
  display: "grid",
  gridTemplateRows: "auto auto",
  gap: "$32",
  paddingBottom: "$96",
  "@md": {
    paddingBottom: "$108",
  },
  "@xl": {
    gridTemplateRows: "none",
    gridTemplateColumns: "1fr 350px",
    paddingBottom: "$144",
  },
});

export type CheckoutProps = {};

export const CheckoutContainer: FC<CheckoutProps> = ({}) => {
  return (
    <Root>
      <DetailsContainer />
      <CartContainer />
    </Root>
  );
};
