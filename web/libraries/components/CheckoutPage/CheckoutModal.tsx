import React, { FC } from "react";
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
  display: "grid",
  gap: "$16",
  backgroundColor: "$gray",
  padding: "$24",
  overflowY: "scroll",
  maxHeight: "$240",
  "-ms-overflow-style": "none",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const EmptyCartText = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

const SingleProductPreview = styled("div", {
  "&:not(&:first-of-type)": {
    borderTop: "1px solid $darkGray",
    paddingTop: "$16",
  },
});

const ModalProductsGrandTotalPrice = styled("div", {
  display: "grid",
  gap: "$8",
  gridTemplateRows: "1fr auto",
  alignItems: "end",
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
  const { cartTotalPrice, removeAllFromCart } = useShoppingCartContext();

  return (
    <Modal isOpen={isModalOpen}>
      <ModalContainer>
        <IconOrder />
        <ModalTitle>{"THANK YOU\nFOR YOUR ORDER"}</ModalTitle>
        <ModalDescription>
          You will receive an email confirmation shortly.
        </ModalDescription>
        <ModalProductsPreviewContainer>
          <ModalProductsPreview>
            {cartItems && cartItems.length === 0 && (
              <EmptyCartText>Your cart is empty.</EmptyCartText>
            )}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((cartItem) => {
                return (
                  <SingleProductPreview>
                    <CartProductPreview size={"small"} cartItem={cartItem} />
                  </SingleProductPreview>
                );
              })}
          </ModalProductsPreview>
          <ModalProductsGrandTotalPrice>
            <TotalPriceTitle>GRAND TOTAL</TotalPriceTitle>
            <TotalPricePrice>{`$ ${cartTotalPrice}`}</TotalPricePrice>
          </ModalProductsGrandTotalPrice>
        </ModalProductsPreviewContainer>
        <StyledLink>
          <Link appearance={"primary"} href={"/"} onClick={removeAllFromCart}>
            Back to home
          </Link>
        </StyledLink>
      </ModalContainer>
    </Modal>
  );
};
