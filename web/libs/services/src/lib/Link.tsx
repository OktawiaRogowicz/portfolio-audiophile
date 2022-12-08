import React, { FC } from "react";
import NextLink, { LinkProps } from "next/link";
import { StyledClickable } from "./StyledClickable";

export type ProjectLinkProps = {
  appearance?: "primary" | "secondary" | "tertiary" | "plain";
  href: LinkProps["href"];
  children: React.ReactNode;
};

export const Link: FC<ProjectLinkProps> = ({ appearance, href, children }) => {
  return (
    <StyledClickable appearance={appearance}>
      <NextLink href={href}>{children}</NextLink>
    </StyledClickable>
  );
};
