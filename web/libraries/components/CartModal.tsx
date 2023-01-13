import React, { FC, useEffect, useState } from "react";
import { styled } from "../styles/stitches";
import { Modal } from "./Modal/Modal";
import { StyledClickable } from "./StyledClickable";
import {
  CartItemType,
  useShoppingCartContext,
} from "../context/shoppingCartContext";
import { CartProductPreview } from "./CheckoutPage/Cart/CartProductPreview";
import { PriceDetail } from "./Price/PriceDetail";
import { Link } from "./Link";

const Root = styled("div", {
  display: "grid",
  gap: "$32",
  padding: "$32",
  backgroundColor: "$white",
});

const Heading = styled("div", {
  display: "grid",
  gap: "$96",
  gridTemplateColumns: "1fr auto",
});

const EmptyCartText = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

const Title = styled("div", {
  projectFont: "heading06",
});

const RemoveAllButton = styled(StyledClickable, {
  projectFont: "body01",
  textDecoration: "underline",
  color: "$black05",
});

const CartProductsPreview = styled("div", {
  display: "grid",
  gap: "$24",
});

const PriceDetails = styled("div", {
  display: "grid",
  gap: "$8",
  projectFont: "body01",
});

const ButtonContainer = styled("div", {
  display: "grid",
  a: {
    width: "100%",
  },
});

export type CartModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  cartItems: CartItemType[];
};

export const CartModal: FC<CartModalProps> = ({
  isModalOpen,
  closeModal,
  cartItems,
}) => {
  const { cartTotalPrice, removeAllFromCart, getQuantity } =
    useShoppingCartContext();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldFocusAfterRender={true}
      margin={"calc($headerHeight + $24) $containerMarginDesktop 0 auto"}
    >
      <Root>
        <Heading>
          <Title>Cart ({getQuantity()})</Title>
          {cartItems && cartItems.length !== 0 && (
            <RemoveAllButton
              onClick={() => removeAllFromCart()}
            >{`Remove all`}</RemoveAllButton>
          )}
        </Heading>
        {cartItems.length > 0 && (
          <CartProductsPreview>
            {cartItems.map((cartItem, index) => {
              return (
                <CartProductPreview
                  key={`cartItem-${index}`}
                  size={"big"}
                  variant={"withQuantityInput"}
                  cartItem={cartItem}
                />
              );
            })}
          </CartProductsPreview>
        )}
        {cartItems && cartItems.length === 0 ? (
          <EmptyCartText>Your cart is empty.</EmptyCartText>
        ) : (
          <>
            <PriceDetails>
              <PriceDetail
                label={"Total"}
                price={cartTotalPrice}
                variant={"black"}
              />
            </PriceDetails>

            <ButtonContainer>
              <Link appearance={"primary"} href={"/checkout"}>
                Continue
              </Link>
            </ButtonContainer>
          </>
        )}
      </Root>
    </Modal>
  );
};
