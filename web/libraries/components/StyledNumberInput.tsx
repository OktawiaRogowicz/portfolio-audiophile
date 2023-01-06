import { styled } from "../styles/stitches";
import { StyledInput } from "./StyledInput";
import { useState } from "react";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
});

const Button = styled("button", {
  height: "$48",
  width: "$40",
  border: "none",
  color: "$black05",
});

type StyledNumberInputProps = {
  value: number;
  handleChange: (e: any) => void;
  handleAdd: () => void;
  handleSubtract: () => void;
};

const StyledNumberInput = ({
  value,
  handleChange,
  handleAdd,
  handleSubtract,
}: StyledNumberInputProps) => {
  return (
    <Root>
      <Button onClick={handleAdd}>+</Button>
      <StyledInput type={"number"} value={value} onChange={handleChange} />
      <Button onClick={handleSubtract}>-</Button>
    </Root>
  );
};

export default StyledNumberInput;
