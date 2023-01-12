import { styled } from "../../../styles/stitches";
import React, { FC, useEffect, useState } from "react";
import { useShoppingCartContext } from "../../../context/shoppingCartContext";
import { CartProductPreview } from "./CartProductPreview";

const Root = styled("div", {
  projectFont: "body01",
});

const CartProductsPreview = styled("div", {
  display: "grid",
  gap: "$24",
});

const EmptyCartText = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

export type CartPreviewProps = {};

export const CartPreview: FC<CartPreviewProps> = ({}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const { cartItems } = useShoppingCartContext();

  if (!mounted) return null;
  return (
    <Root>
      <CartProductsPreview>
        {cartItems && cartItems.length === 0 && (
          <EmptyCartText>Your cart is empty.</EmptyCartText>
        )}
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((cartItem, index) => {
            return (
              <CartProductPreview
                key={`cartItem-${index}`}
                size={"big"}
                cartItem={cartItem}
              />
            );
          })}
      </CartProductsPreview>
    </Root>
  );
};
