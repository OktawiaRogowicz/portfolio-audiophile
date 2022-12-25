import { createStitches } from "@stitches/react";
import { getFontStyles } from "./fonts";
import { sizes } from "./sizes";
import { radius } from "./radius";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      orange: "#D87D4A",
      lightOrange: "#fbaf85",
      gray: "#F1F1F1",
      lightGray: "#FAFAFA",
      white: "#FFFFFF",
      white02: "rgba(255, 255, 255, 0.2)",
      lightBlack: "#101010",
      black: "#000000",
      black05: "rgba(0, 0, 0, 0.5)",
    },
    // radii: radius,
    space: sizes,
    sizes,
  },
  media: {
    xs: "(min-width: 375px)",
    sm: "(min-width: 430px)",
    md: "(min-width: 740px)",
    lg: "(min-width: 1000px)",
    xl: "(min-width: 1300px)",
    xxl: "(min-width: 1512px)",
    xxxl: "(min-width: 1900px)",
  },
  utils: {
    projectFont: getFontStyles,
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});
