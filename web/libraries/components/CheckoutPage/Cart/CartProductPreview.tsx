import { styled } from "../../../styles/stitches";
import { FC } from "react";
import { Product } from "../../../models/product";
import Media from "../../Media";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "0 $16",
});

const CartProductImage = styled("div", {
  backgroundColor: "$gray",
  borderRadius: "10px",
  variants: {
    variant: {
      big: {
        height: "$64",
        width: "$64",
      },
      small: {
        height: "$48",
        width: "$48",
      },
    },
  },
});

const CartProductDetails = styled("div", {
  display: "grid",
  projectFont: "body02",
});

const CartProductHeading = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
});

const CartProductTitle = styled("div", {});

const CartProductQuantity = styled("div", {
  color: "$black05",
});

const CartProductPrice = styled("div", {
  color: "$black05",
});

export type CartProductPreviewProps = {
  variant: "big" | "small";
  product: Product;
};

export const CartProductPreview: FC<CartProductPreviewProps> = ({
  variant,
  product,
}) => {
  return (
    <Root>
      <CartProductImage variant={variant}>
        <Media image={product.image.image} />
      </CartProductImage>
      <CartProductDetails>
        <CartProductHeading>
          <CartProductTitle>{product.name}</CartProductTitle>
          <CartProductQuantity>{}</CartProductQuantity>
        </CartProductHeading>
        <CartProductPrice>{product.price}</CartProductPrice>
      </CartProductDetails>
    </Root>
  );
};
