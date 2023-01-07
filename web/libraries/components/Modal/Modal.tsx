import React, { FC } from "react";
import ReactModal from "react-modal";
import { Content } from "./Content";
import { Overlay } from "./Overlay";

export type ModalProps = ReactModal.Props & {
  margin?: string;
  children: React.ReactNode;
};

export const MODAL_CLASSES = {
  base: "base",
  afterOpen: "after-open",
  beforeClose: "before-close",
};

export const Modal: FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  margin,
  children,
  ...reactModalProps
}) => {
  const openTime = 400;
  const closeTime = 200;

  const contentProps = {
    closeTime,
    openTime,
    onRequestClose,
  };
  const overlayProps = {
    closeTime,
    openTime,
  };

  return (
    <ReactModal
      {...reactModalProps}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayElement={(props, contentElement) => (
        <Overlay {...props} {...overlayProps}>
          {contentElement}
        </Overlay>
      )}
      contentElement={(props, children) => (
        <Content margin={margin} {...props} {...contentProps}>
          {children}
        </Content>
      )}
      className={MODAL_CLASSES}
      overlayClassName={MODAL_CLASSES}
      closeTimeoutMS={closeTime}
    >
      {children}
    </ReactModal>
  );
};
