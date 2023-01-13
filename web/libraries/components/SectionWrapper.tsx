import { styled } from "../styles/stitches";
import React, { FC } from "react";

const Root = styled("div", {
  variants: {
    margin: {
      M: {
        marginTop: "$80",
        marginBottom: "$80",
        "@md": {
          marginTop: "$160",
          marginBottom: "$160",
        },
        "@lg": {
          marginTop: "$160",
          marginBottom: "$160",
        },
      },
      S: {
        marginTop: "$64",
        marginBottom: "$64",
      },
      none: {},
    },
  },
});

export type SectionWrapperMarginType = "M" | "S" | "none";

export type SectionWrapperProps = {
  margin?: SectionWrapperMarginType;
  children: React.ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  margin = "M",
  children,
}) => {
  return <Root margin={margin}>{children}</Root>;
};
