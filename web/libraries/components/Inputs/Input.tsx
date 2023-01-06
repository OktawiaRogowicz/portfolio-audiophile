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
  "&:focus-visible": {
    borderColor: "$orange",
    caretColor: "$orange",
  },
  variants: {
    variant: {
      radio: {
        // "-webkit-appearance": "none",
        // appearance: "none",
        // backgroundColor: "#fff",
        // margin: 0,
      },
      text: {},
      email: {},
      number: {},
    },
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
      <Input type={type} name={type} variant={type} />
    </Root>
  );
};
