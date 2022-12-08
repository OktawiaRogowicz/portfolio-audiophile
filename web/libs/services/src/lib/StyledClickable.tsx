import React, { FC } from "react";
import { styled } from "@portfolio-audiophile/styles";

export const StyledClickable = styled("button", {
  background: "none",
  border: "none",
  variants: {
    appearance: {
      primary: {
        backgroundColor: "pink",
      },
      secondary: {
        backgroundColor: "red",
      },
      tertiary: {
        backgroundColor: "blue",
      },
      plain: {
        projectFont: "subtitle",
        a: {
          textDecoration: "none",
          color: "white",
        },
      },
    },
  },
});
