import { styled } from "@portfolio-audiophile/styles";
import React, { FC } from "react";

const Root = styled("div", {
  width: "100vw",
  variants: {
    backgroundColor: {
      black: {
        backgroundColor: "$black",
        color: "$white",
      },
      white: {
        backgroundColor: "$white",
        color: "$black",
      },
    },
  },
});

const ContainerWithMargins = styled("div", {
  marginLeft: "$containerMarginMobile",
  marginRight: "$containerMarginMobile",
  "@md": {
    marginLeft: "$containerMarginTablet",
    marginRight: "$containerMarginTablet",
  },
  "@lg": {
    marginLeft: "$containerMarginDesktop",
    marginRight: "$containerMarginDesktop",
  },
});

export type ContainerProps = {
  backgroundColor: "black" | "white";
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <Root backgroundColor={backgroundColor}>
      <ContainerWithMargins>{children}</ContainerWithMargins>
    </Root>
  );
};
