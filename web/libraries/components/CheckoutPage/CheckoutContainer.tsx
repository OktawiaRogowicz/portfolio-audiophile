import { styled } from "../../styles/stitches";
import React, { FC, useState } from "react";
import { DetailsContainer } from "./DetailsContainer";
import { CartContainer } from "./CartContainer";
import { useForm, useFormState } from "react-hook-form";
import { CheckoutModal } from "./CheckoutModal";
import { useShoppingCartContext } from "../../context/shoppingCartContext";

const Root = styled("form", {
  display: "grid",
  gridTemplateRows: "auto auto",
  gap: "$32",
  paddingBottom: "$96",
  "@md": {
    paddingBottom: "$108",
  },
  "@xl": {
    gridTemplateRows: "none",
    gridTemplateColumns: "1fr 350px",
    paddingBottom: "$144",
  },
});

export type CheckoutProps = {};

export const CheckoutContainer: FC<CheckoutProps> = ({}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { cartItems } = useShoppingCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  const onSubmit = () => {
    openModal();
  };

  return (
    <Root onSubmit={handleSubmit(onSubmit)}>
      <DetailsContainer control={control} />
      <CartContainer />
      <CheckoutModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        cartItems={cartItems}
      />
    </Root>
  );
};
