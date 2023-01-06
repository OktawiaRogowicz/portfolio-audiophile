const MANROPE_BOLD = {
  fontFamily: "Manrope, sans-serif",
  fontWeight: 700,
};
const MANROPE_MEDIUM = {
  fontFamily: "Manrope, sans-serif",
  fontWeight: 500,
};
const MANROPE_REGULAR = {
  fontFamily: "Manrope, sans-serif",
  fontWeight: 400,
};

export const fonts = {
  heading01: {
    fontSize: 56,
    lineHeight: "58px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading02: {
    fontSize: 40,
    lineHeight: "44px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading03: {
    fontSize: 32,
    lineHeight: "36px",
    letterSpacing: "1.2px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading04: {
    fontSize: 28,
    lineHeight: "38px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading05: {
    fontSize: 24,
    lineHeight: "33px",
    letterSpacing: "1.7px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading06: {
    fontSize: 18,
    lineHeight: "24px",
    letterSpacing: "1.3px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading07: {
    fontSize: 15,
    lineHeight: "25px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  heading08: {
    fontSize: 15,
    lineHeight: "25px",
    textTransform: "uppercase",
    ...MANROPE_REGULAR,
  },
  overline: {
    fontSize: 14,
    lineHeight: "19px",
    letterSpacing: "10px",
    textTransform: "uppercase",
    ...MANROPE_REGULAR,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: "25px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
  body01: {
    fontSize: 15,
    lineHeight: "25px",
    ...MANROPE_MEDIUM,
  },
  body02: {
    fontSize: 14,
    lineHeight: "24px",
    ...MANROPE_BOLD,
  },
  body03: {
    fontSize: 12,
    lineHeight: "16px",
    ...MANROPE_BOLD,
  },
  button: {
    fontSize: 13,
    letterSpacing: "1px",
    textTransform: "uppercase",
    ...MANROPE_BOLD,
  },
};

export type FontType = keyof typeof fonts;

export const getFontStyles = (fontType: FontType) => fonts[fontType];
