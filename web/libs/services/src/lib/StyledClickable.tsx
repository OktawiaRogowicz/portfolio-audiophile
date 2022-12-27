import React, { FC } from "react";
import { styled } from "@portfolio-audiophile/styles";

export const StyledClickable = styled("button", {
  background: "none",
  border: "none",
  transition: "200ms",
  "&:hover": {
    cursor: "pointer",
  },
  display: "grid",
  gap: "$12",
  gridAutoFlow: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  width: "fit-content",
  variants: {
    appearance: {
      primary: {
        height: "$48",
        padding: "0 $32",
        backgroundColor: "$orange",
        projectFont: "button",
        color: "$white",
        "&:hover": {
          backgroundColor: "$lightOrange",
        },
      },
      secondary: {
        height: "$48",
        padding: "0 $32",
        backgroundColor: "transparent",
        projectFont: "button",
        color: "$black",
        border: "1px solid $black",
        "&:hover": {
          backgroundColor: "$black",
          color: "$white",
        },
      },
      tertiary: {
        backgroundColor: "blue",
      },
      plain: {
        projectFont: "subtitle",
        textDecoration: "none",
      },
    },
  },
});
