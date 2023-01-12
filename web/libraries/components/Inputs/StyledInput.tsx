import { styled } from "../../styles/stitches";

export const StyledInput = styled("input", {
  height: "$32",
  width: "$24",
  textAlign: "center",
  backgroundColor: "$gray",
  border: "none",
  "-moz-appearance": "textfield",
  "-webkit-appearance": "none",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button ": {
    "-webkit-appearance": "none",
  },
  variants: {
    size: {
      big: {
        height: "$48",
        width: "$40",
      },
      small: {},
    },
  },
});
