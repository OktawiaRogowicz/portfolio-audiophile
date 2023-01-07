import React, { FC } from "react";
import { styled } from "../../styles/stitches";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  textTransform: "uppercase",
});

const Text = styled("div", {
  color: "$black05",
});

const Price = styled("div", {
  projectFont: "heading06",
  variants: {
    variant: {
      orange: {
        color: "$orange",
      },
      black: {
        color: "$black",
      },
    },
  },
});

export type PriceDetailProps = {
  label: string;
  price: number;
  variant: "black" | "orange";
};

export const PriceDetail: FC<PriceDetailProps> = ({
  label,
  price,
  variant,
}) => {
  return (
    <Root>
      <Text>{label}</Text>
      <Price variant={variant}>{`$ ${price}`}</Price>
    </Root>
  );
};
