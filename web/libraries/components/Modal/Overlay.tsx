import React, { ComponentPropsWithRef } from "react";
import { styled } from "../../styles/stitches";

const Backdrop = styled("div", {
  opacity: 0,
  pointerEvents: "none",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const OverlayStyled = styled("div", {
  position: "fixed",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  gridGap: "$24",
  overflow: "auto",
  zIndex: 8888,
  padding: "$8",
  [`&.base ${Backdrop}`]: { opacity: 0 },
  [`&.after-open ${Backdrop}`]: { opacity: 1 },
  [`&.before-close ${Backdrop}`]: { opacity: 0 },
});

export type OverlayProps = ComponentPropsWithRef<"div"> & {
  openTime: number;
  closeTime: number;
};

export const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  ({ openTime = 200, closeTime = 400, children, ...restProps }, ref) => {
    return (
      <OverlayStyled
        {...restProps}
        style={{}}
        css={{
          [`&.base ${Backdrop}`]: {
            transition: `opacity ${openTime}ms`,
          },
          [`&.before-close ${Backdrop}`]: {
            transition: `opacity ${closeTime}ms`,
          },
        }}
        ref={ref}
      >
        <Backdrop />
        {children}
        {/*{overlayCloseButton && (*/}
        {/*  <ButtonWrapper>*/}
        {/*    <StyledClickable>*/}
        {/*      {overlayCloseButtonLabel ?? "close"}*/}
        {/*    </StyledClickable>*/}
        {/*  </ButtonWrapper>*/}
        {/*)}*/}
      </OverlayStyled>
    );
  }
);
Overlay.displayName = "Overlay";
