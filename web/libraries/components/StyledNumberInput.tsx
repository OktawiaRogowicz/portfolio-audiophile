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

const StyledNumberInput = ({ image }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e: any) => {
    setQuantity(parseInt(e.target.value));
  };
  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleSubtract = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <Root>
      <Button onClick={handleAdd}>+</Button>
      <StyledInput type={"number"} value={quantity} onChange={handleChange} />
      <Button onClick={handleSubtract}>-</Button>
    </Root>
  );
};

export default StyledNumberInput;
