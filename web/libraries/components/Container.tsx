import { styled } from "../styles/stitches";
import React, { FC } from "react";

const Root = styled("div", {
  zIndex: 0,
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
      gray: {
        backgroundColor: "$gray",
        color: "$black",
      },
      transparent: {
        backgroundColor: "transparent",
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
  backgroundColor?: "black" | "white" | "gray" | "transparent";
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({
  backgroundColor = "black",
  children,
}) => {
  return (
    <Root backgroundColor={backgroundColor}>
      <ContainerWithMargins>{children}</ContainerWithMargins>
    </Root>
  );
};
