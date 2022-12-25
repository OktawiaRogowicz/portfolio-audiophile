import { styled } from "@portfolio-audiophile/styles";
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
      none: {},
    },
  },
});

export type SectionWrapperProps = {
  margin: "M" | "none";
  children: React.ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({
  margin,
  children,
}) => {
  return <Root margin={margin}>{children}</Root>;
};
