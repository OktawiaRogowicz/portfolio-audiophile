import { styled } from "../../../styles/stitches";
import { FC, useState } from "react";
import Media from "../../Media";
import {
  CartItemType,
  useShoppingCartContext,
} from "../../../context/shoppingCartContext";
import StyledNumberInput from "../../StyledNumberInput";

const Root = styled("div", {
  display: "grid",
  gap: "0 $16",
  variants: {
    variant: {
      default: {
        gridTemplateColumns: "auto 1fr",
      },
      withQuantityInput: {
        gridTemplateColumns: "auto 1fr auto",
      },
    },
  },
});

const CartProductImage = styled("div", {
  overflow: "hidden",
  borderRadius: "5px",
  backgroundColor: "$gray",
  variants: {
    size: {
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

const QuantityInput = styled("div", {
  display: "grid",
  alignItems: "center",
});

export type CartProductPreviewProps = {
  size: "big" | "small";
  variant?: "default" | "withQuantityInput";
  cartItem: CartItemType;
};

export const CartProductPreview: FC<CartProductPreviewProps> = ({
  size,
  variant = "default",
  cartItem,
}) => {
  const { increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCartContext();

  const handleAdd = () => {
    increaseCartQuantity(cartItem.product, 1);
  };

  const handleSubtract = () => {
    decreaseCartQuantity(cartItem.product.id);
  };

  return (
    <Root variant={variant}>
      <CartProductImage size={size}>
        <Media image={cartItem.product.image.image} />
      </CartProductImage>
      <CartProductDetails>
        <CartProductHeading>
          <CartProductTitle>{cartItem.product.name}</CartProductTitle>
          {variant === "default" && (
            <CartProductQuantity>{`x${cartItem.quantity}`}</CartProductQuantity>
          )}
        </CartProductHeading>
        <CartProductPrice>{`$ ${cartItem.product.price}`}</CartProductPrice>
      </CartProductDetails>
      {variant === "withQuantityInput" && (
        <QuantityInput>
          <StyledNumberInput
            size={"small"}
            value={cartItem.quantity}
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
          />
        </QuantityInput>
      )}
    </Root>
  );
};
