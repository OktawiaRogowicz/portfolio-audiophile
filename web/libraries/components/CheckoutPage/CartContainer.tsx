import { styled } from "../../styles/stitches";
import React, { FC, useState } from "react";
import { StyledClickable } from "../StyledClickable";
import { CartPreview } from "./Cart/CartPreview";
import { Product } from "../../models/product";
import { Modal } from "../Modal/Modal";
import { IconOrder } from "../../icons/IconOrder";
import { Link } from "../Link";
import { CartProductPreview } from "./Cart/CartProductPreview";

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
  projectFont: "body01",
});

const PriceDetail = styled("div", {
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

const GrandTotal = styled("div", {
  projectFont: "body01",
});

const ButtonContainer = styled("div", {
  display: "grid",
  button: {
    width: "100%",
  },
});

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
  backgroundColor: "$black",
  padding: "$32",
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

export type CartContainerProps = {
  products: Product[];
};

export const CartContainer: FC<CartContainerProps> = ({ products }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Root>
      <Title>Summary</Title>
      <CartPreview products={products} />
      <PriceDetails>
        <PriceDetail>
          <Text>Total</Text>
          <Price variant={"black"}>x</Price>
        </PriceDetail>
        <PriceDetail>
          <Text>Shipping</Text>
          <Price variant={"black"}>x</Price>
        </PriceDetail>
        <PriceDetail>
          <Text>VAT (INCLUDED)</Text>
          <Price variant={"black"}>x</Price>
        </PriceDetail>
      </PriceDetails>
      <GrandTotal>
        <PriceDetail>
          <Text>GRAND TOTAL</Text>
          <Price variant={"orange"}>x</Price>
        </PriceDetail>
      </GrandTotal>
      <ButtonContainer>
        <StyledClickable
          appearance={"primary"}
          onClick={() => setIsModalOpen(true)}
        >
          Continue
        </StyledClickable>
      </ButtonContainer>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <ModalContainer>
          <IconOrder />
          <ModalTitle>{"THANK YOU\nFOR YOUR ORDER"}</ModalTitle>
          <ModalDescription>
            You will receive an email confirmation shortly.
          </ModalDescription>
          <ModalProductsPreviewContainer>
            <ModalProductsPreview>
              {products.length > 0 &&
                products.map((product) => {
                  return (
                    <CartProductPreview variant={"small"} product={product} />
                  );
                })}
            </ModalProductsPreview>
            <ModalProductsGrandTotalPrice>x</ModalProductsGrandTotalPrice>
          </ModalProductsPreviewContainer>
          <StyledLink>
            <Link appearance={"primary"} href={"/"}>
              Back to home
            </Link>
          </StyledLink>
        </ModalContainer>
      </Modal>
    </Root>
  );
};
