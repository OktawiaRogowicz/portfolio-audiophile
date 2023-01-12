import React, { FC } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import { StyledInput } from "./Input";

type FormProps = {
  type?: "radio" | "text" | "email" | "number";
  helpText?: string;
  label?: string;
  placeholder?: string;
};

type FormStyledInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  UseControllerProps<any> &
  FormProps;

export const FormStyledInput: FC<FormStyledInputProps> = ({
  checked = undefined,
  type,
  placeholder,
  label,
  rules,
  control,
  name,
  shouldUnregister,
  defaultValue,
  helpText,
  ...restOfProps
}) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
  });

  return (
    <>
      <StyledInput
        checked={checked}
        aria-invalid={invalid}
        errorMessage={error}
        type={type}
        placeholder={placeholder}
        label={label}
        id={name}
        invalid={invalid}
        {...field}
        {...restOfProps}
      />
    </>
  );
};
