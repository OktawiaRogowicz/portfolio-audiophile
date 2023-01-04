import { styled } from "../../styles/stitches";
import React, { FC } from "react";

const Root = styled("div", {
  display: "grid",
  gap: "$8",
});

const InputLabel = styled("div", {
  projectFont: "body03",
});

const Input = styled("input", {
  padding: "$16 $24",
  borderRadius: "5px",
  projectFont: "body01",
  border: "1px solid $darkGray",
  "&:active, &:focus-within": {
    border: "1px solid $orange",
  },
});

export type StyledInputProps = {
  type?: "radio" | "text" | "email" | "number";
  label: string;
};

export const StyledInput: FC<StyledInputProps> = ({ type = "text", label }) => {
  return (
    <Root>
      <InputLabel>{label}</InputLabel>
      <Input type={type} />
    </Root>
  );
};
