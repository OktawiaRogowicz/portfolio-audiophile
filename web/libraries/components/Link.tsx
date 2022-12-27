import React, { FC } from "react";
import { styled } from "../styles/stitches";
import NextLink, { LinkProps } from "next/link";
import { StyledClickable } from "./StyledClickable";

export const Root = styled("div", {});

export type ProjectLinkProps = {
  appearance: "primary" | "secondary" | "tertiary" | "plain";
  href: LinkProps["href"];
  children: React.ReactNode;
};

export const Link: FC<ProjectLinkProps> = ({ appearance, href, children }) => {
  return (
    <StyledClickable as={"a"} href={href} appearance={appearance}>
      {children}
    </StyledClickable>
  );
};
