import { styled } from "../../styles/stitches";
import React, { FC, useState } from "react";
import { FieldError } from "react-hook-form";

const Root = styled("div", {
  display: "grid",
  gap: "$8",
  variants: {
    variant: {
      radio: {
        gridTemplateColumns: "auto 1fr",
        alignItems: "center",
        padding: "$16 $24",
        border: "1px solid $darkGray",
        borderRadius: "5px",
      },
      text: {},
      email: {},
      number: {},
    },
  },
});

const Heading = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  projectFont: "body03",
});

const InputLabel = styled("div", {
  order: 1,
  variants: {
    variant: {
      radio: {
        order: 2,
      },
      text: {},
      email: {},
      number: {},
    },
    invalid: {
      true: {
        color: "$red",
      },
      false: {},
    },
  },
});

const ErrorMessage = styled("div", {
  color: "$red",
  order: 2,
});

const Input = styled("input", {
  order: 2,
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
        display: "grid",
        placeContent: "center",
        padding: 0,
        order: 1,
        "-webkit-appearance": "none",
        appearance: "none",
        backgroundColor: "#fff",
        margin: 0,
        font: "inherit",
        color: "currentColor",
        width: "$20",
        height: "$20",
        border: "1px solid $darkGray",
        borderRadius: "50%",
        "&:after": {
          content: "",
          width: "$12",
          height: "$12",
          borderRadius: "50%",
          transform: "scale(0)",
          transition: "120ms transform ease-in-out",
          backgroundColor: "$orange",
        },
        "&:checked::after": {
          transform: "scale(1)",
        },
      },
      text: {},
      email: {},
      number: {},
    },
    invalid: {
      true: {
        border: "1px solid $red",
      },
      false: {},
    },
  },
});

export type StyledInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  type?: "radio" | "text" | "email" | "number";
  label?: string;
  invalid?: boolean;
  errorMessage?: FieldError;
};

export const StyledInput: FC<StyledInputProps> = ({
  type = "text",
  label,
  invalid,
  errorMessage,
  ...inputAttributes
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Root variant={type}>
      <Heading>
        {label && (
          <InputLabel variant={type} invalid={invalid}>
            {label}
          </InputLabel>
        )}
        {invalid && errorMessage && (
          <ErrorMessage>{errorMessage.message}</ErrorMessage>
        )}
      </Heading>
      <Input
        type={type}
        invalid={invalid}
        name={type}
        variant={type}
        {...inputAttributes}
      />
    </Root>
  );
};
