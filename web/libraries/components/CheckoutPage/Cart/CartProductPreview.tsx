import { styled } from "../../../styles/stitches";
import { FC } from "react";
import Media from "../../Media";
import { CartItemType } from "../../../context/shoppingCartContext";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "0 $16",
});

const CartProductImage = styled("div", {
  overflow: "hidden",
  borderRadius: "5px",
  backgroundColor: "$gray",
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
  gap: "$16",
  gridTemplateColumns: "1fr auto",
});

const CartProductTitle = styled("div", {
  projectFont: "heading07",
});

const CartProductQuantity = styled("div", {
  projectFont: "body02",
  color: "$black05",
});

const CartProductPrice = styled("div", {
  color: "$black05",
  projectFont: "body02",
});

export type CartProductPreviewProps = {
  variant: "big" | "small";
  cartItem: CartItemType;
};

export const CartProductPreview: FC<CartProductPreviewProps> = ({
  variant,
  cartItem,
}) => {
  return (
    <Root>
      <CartProductImage variant={variant}>
        <Media image={cartItem.product.image.image} />
      </CartProductImage>
      <CartProductDetails>
        <CartProductHeading>
          <CartProductTitle>{cartItem.product.name}</CartProductTitle>
          <CartProductQuantity>x{cartItem.quantity}</CartProductQuantity>
        </CartProductHeading>
        <CartProductPrice>{`$ ${cartItem.product.price}`}</CartProductPrice>
      </CartProductDetails>
    </Root>
  );
};
