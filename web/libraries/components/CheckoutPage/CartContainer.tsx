import { styled } from "../../styles/stitches";
import React, { FC, useEffect, useState } from "react";
import { StyledClickable } from "../StyledClickable";
import { CartPreview } from "./Cart/CartPreview";
import { useShoppingCartContext } from "../../context/shoppingCartContext";
import { PriceDetail } from "../Price/PriceDetail";
import { CheckoutModal } from "./CheckoutModal";

const Root = styled("div", {
  height: "fit-content",
  backgroundColor: "$white",
  padding: "$32",
  borderRadius: "10px",
  display: "grid",
  gridAutoRows: "auto",
  gap: "$32",
});

const Title = styled("div", {
  projectFont: "heading06",
});

const PriceDetails = styled("div", {
  display: "grid",
  gap: "$8",
  projectFont: "body01",
});

const GrandTotal = styled("div", {
  projectFont: "body01",
});

const ButtonContainer = styled("div", {
  display: "grid",
  button: {
    width: "100%",
  },
});

export type CartContainerProps = {};

export const CartContainer: FC<CartContainerProps> = () => {
  const [mounted, setMounted] = useState(false);
  const { cartItems, cartTotalPrice } = useShoppingCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Root>
      <Title>Summary</Title>
      <CartPreview />
      <PriceDetails>
        <PriceDetail label={"Total"} price={cartTotalPrice} variant={"black"} />
        <PriceDetail label={"Shipping"} price={50} variant={"black"} />
        <PriceDetail
          label={"VAT (INCLUDED)"}
          price={Number(Math.round(cartTotalPrice * 0.2).toFixed(2))}
          variant={"black"}
        />
      </PriceDetails>
      <GrandTotal>
        <PriceDetail
          label={"GRAND TOTAL"}
          price={cartTotalPrice + 50}
          variant={"orange"}
        />
      </GrandTotal>
      <ButtonContainer>
        <StyledClickable
          appearance={"primary"}
          onClick={() => setIsModalOpen(true)}
        >
          Continue
        </StyledClickable>
      </ButtonContainer>
      <CheckoutModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        cartItems={cartItems}
      />
    </Root>
  );
};
