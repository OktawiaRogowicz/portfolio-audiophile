import { styled } from "../styles/stitches";
import { StyledInput } from "./Inputs/StyledInput";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
});

const Button = styled("button", {
  border: "none",
  color: "$black05",
  variants: {
    size: {
      big: {
        height: "$48",
        width: "$40",
      },
      small: {
        height: "$32",
        width: "$24",
      },
    },
  },
});

type StyledNumberInputProps = {
  size?: "big" | "small";
  value: number;
  handleAdd: () => void;
  handleSubtract: () => void;
};

const StyledNumberInput = ({
  size = "big",
  value,
  handleAdd,
  handleSubtract,
}: StyledNumberInputProps) => {
  return (
    <Root>
      <Button size={size} onClick={handleAdd}>
        +
      </Button>
      <StyledInput
        type={"number"}
        onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
        min="1"
        value={value}
        size={size}
      />
      <Button size={size} onClick={handleSubtract}>
        -
      </Button>
    </Root>
  );
};

export default StyledNumberInput;
