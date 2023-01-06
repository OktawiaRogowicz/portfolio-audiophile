import { styled } from "../../styles/stitches";
import React, { FC, useState } from "react";
import { StyledInput } from "../Inputs/Input";
import { IconCash } from "../../icons/IconCash";

const Root = styled("div", {
  backgroundColor: "$white",
  padding: "$56 $48 $48 $48",
  display: "grid",
  gap: "$48",
  borderRadius: "10px",
});

const Title = styled("div", {
  projectFont: "heading03",
});

const Subtitle = styled("div", {
  projectFont: "subtitle",
  color: "$orange",
});

const DetailsContentWrap = styled("div", {
  display: "grid",
  gap: "$24",
});

const DetailsContent = styled("div", {
  display: "grid",
  gap: "$24",
});

const TwoColumnsContainer = styled("div", {
  display: "grid",
  gridAutoRows: "1fr",
  gap: "$24 $24",
  "@md": {
    gridTemplateColumns: "1fr 1fr",
    gap: "$24 $16",
  },
});

const Label = styled("div", {
  projectFont: "body03",
});

const PaymentDetailsContent = styled("div", {
  display: "grid",
  gap: "$16",
});

const TipContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "$32",
});

const TipImage = styled("div", {});

const TipDescription = styled("div", {
  projectFont: "body01",
  color: "$black05",
});

export type DetailsContainerProps = {};

export const DetailsContainer: FC<DetailsContainerProps> = ({}) => {
  return (
    <Root>
      <Title>Checkout</Title>
      <DetailsContentWrap>
        <Subtitle>Billing details</Subtitle>
        <DetailsContent>
          <TwoColumnsContainer>
            <StyledInput label={"Name"} />
            <StyledInput type={"email"} label={"E-mail address"} />
            <StyledInput type={"number"} label={"Phone Number"} />
          </TwoColumnsContainer>
        </DetailsContent>
      </DetailsContentWrap>
      <DetailsContentWrap>
        <Subtitle>Shipping info</Subtitle>
        <StyledInput label={"Address"} />
        <DetailsContent>
          <TwoColumnsContainer>
            <StyledInput label={"ZIP code"} />
            <StyledInput label={"City"} />
            <StyledInput label={"Country"} />
          </TwoColumnsContainer>
        </DetailsContent>
      </DetailsContentWrap>
      <DetailsContentWrap>
        <Subtitle>Payment details</Subtitle>
        <TwoColumnsContainer>
          <Label>Payment Method</Label>
          <PaymentDetailsContent>
            <StyledInput type={"radio"} label={"e-Money"} />
            <StyledInput type={"radio"} label={"Cash on Delivery"} />
          </PaymentDetailsContent>
        </TwoColumnsContainer>
      </DetailsContentWrap>
      <TipContainer>
        <TipImage>
          <IconCash />
        </TipImage>
        <TipDescription>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </TipDescription>
      </TipContainer>
    </Root>
  );
};
