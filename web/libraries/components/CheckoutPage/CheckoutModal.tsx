import React, { FC, useEffect, useState } from "react";
import { styled } from "../../styles/stitches";
import { Modal } from "../Modal/Modal";
import { IconOrder } from "../../icons/IconOrder";
import { Link } from "../Link";
import {
  CartItemType,
  useShoppingCartContext,
} from "../../context/shoppingCartContext";
import { CartProductPreview } from "./Cart/CartProductPreview";

const ModalContainer = styled("div", {
  width: "540px",
  backgroundColor: "$white",
  padding: "$48",
  boxSizing: "borderBox",
  display: "grid",
  gap: "$32",
});

const ModalTitle = styled("div", {
  projectFont: "heading03",
  whiteSpace: "pre-line",
});

const ModalDescription = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

const ModalProductsPreviewContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "5fr 4fr",
  borderRadius: "10px",
  overflow: "hidden",
});

const ModalProductsPreview = styled("div", {
  backgroundColor: "$gray",
  padding: "$24",
});

const ModalProductsGrandTotalPrice = styled("div", {
  display: "grid",
  gap: "$8",
  backgroundColor: "$black",
  padding: "$32",
  color: "$white",
});

const TotalPriceTitle = styled("div", {
  projectFont: "heading08",
  color: "$white05",
});

const TotalPricePrice = styled("div", {
  projectFont: "heading06",
  color: "$white",
});

const StyledLink = styled("div", {
  display: "grid",
  backgroundColor: "pink",
  a: {
    maxWidth: "100%",
    width: "100%",
  },
});

export type CheckoutModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  cartItems: CartItemType[];
};

export const CheckoutModal: FC<CheckoutModalProps> = ({
  isModalOpen,
  closeModal,
  cartItems,
}) => {
  const { cartTotalPrice } = useShoppingCartContext();

  return (
    <Modal isOpen={isModalOpen} shouldFocusAfterRender={false}>
      <ModalContainer>
        <IconOrder />
        <ModalTitle>{"THANK YOU\nFOR YOUR ORDER"}</ModalTitle>
        <ModalDescription>
          You will receive an email confirmation shortly.
        </ModalDescription>
        <ModalProductsPreviewContainer>
          <ModalProductsPreview>
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((cartItem) => {
                return (
                  <CartProductPreview variant={"small"} cartItem={cartItem} />
                );
              })}
          </ModalProductsPreview>
          <ModalProductsGrandTotalPrice>
            <TotalPriceTitle>GRAND TOTAL</TotalPriceTitle>
            <TotalPricePrice>{cartTotalPrice}</TotalPricePrice>
          </ModalProductsGrandTotalPrice>
        </ModalProductsPreviewContainer>
        <StyledLink>
          <Link appearance={"primary"} href={"/"}>
            Back to home
          </Link>
        </StyledLink>
      </ModalContainer>
    </Modal>
  );
};
