import { styled } from "@portfolio-audiophile/styles";

export const StyledInput = styled("input", {
  height: "$48",
  width: "$40",
  textAlign: "center",
  backgroundColor: "$gray",
  border: "none",
  "-moz-appearance": "textfield",
  "-webkit-appearance": "none",
  "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button ": {
    "-webkit-appearance": "none",
  },
});
