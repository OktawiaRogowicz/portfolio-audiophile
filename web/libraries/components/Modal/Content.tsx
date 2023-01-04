import React, { ComponentPropsWithRef } from "react";
import { styled } from "../../styles/stitches";

const ContentStyled = styled("div", {
  position: "relative",
  border: "none",
  maxWidth: "100%",
  margin: "auto",
  overflowY: "auto",
  borderRadius: "10px",
  ["fade"]: {
    [`&.base`]: {
      opacity: 0,
    },
    [`&.after-open`]: {
      opacity: 1,
    },
    [`&.before-close`]: {
      opacity: 0,
    },
  },
});

type ContentProps = ComponentPropsWithRef<"div"> & {
  onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  openTime: number;
  closeTime: number;
};

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, openTime, closeTime, onRequestClose, ...restProps }, ref) => {
    return (
      <ContentStyled
        {...restProps}
        ref={ref}
        style={{}}
        css={{
          "&.base": {
            transition: `all ${openTime}ms cubic-bezier(.2,.4,.2,1)`,
          },
          "&.before-close": {
            transition: `all ${closeTime}ms cubic-bezier(.2,.4,.2,1)`,
          },
        }}
      >
        {children}
      </ContentStyled>
    );
  }
);

Content.displayName = "Content";
