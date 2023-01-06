import { globalCss } from "./stitches";

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, boxSizing: "border-box" },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  [`a:focus, button:focus, input:focus, select:focus, div:focus`]: {
    outline: "none",
  },
  "@import": [
    "url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap')",
  ],
  "@font-face": [
    {
      fontDisplay: "block",
      fontFamily: "Play",
      src: "url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap')",
    },
  ],
});
