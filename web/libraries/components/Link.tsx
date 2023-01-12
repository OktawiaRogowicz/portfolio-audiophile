import React, { FC } from "react";
import { styled } from "../styles/stitches";
import NextLink, { LinkProps } from "next/link";
import { StyledClickable } from "./StyledClickable";

export const Root = styled("div", {});

export type ProjectLinkProps = {
  appearance?: "primary" | "secondary" | "tertiary" | "plain";
  href: LinkProps["href"];
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
};

export const Link: FC<ProjectLinkProps> = ({
  appearance,
  href,
  children,
  onClick,
}) => {
  return (
    <StyledClickable
      onClick={onClick}
      as={"a"}
      href={href}
      appearance={appearance}
    >
      {children}
    </StyledClickable>
  );
};
