import { styled } from "../../styles/stitches";
import React, { FC, useState } from "react";
import { StyledInput } from "../Inputs/Input";
import { IconCash } from "../../icons/IconCash";
import {
  Control,
  FieldValues,
  useController,
  UseFormRegister,
} from "react-hook-form";
import { FormStyledInput } from "../Inputs/FormStyledInput";
import { validateRequired } from "../../helpers/validateRequired";

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
  gridAutoRows: "auto",
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

export type DetailsContainerProps = {
  control: Control<FieldValues, any>;
};

export const DetailsContainer: FC<DetailsContainerProps> = ({ control }) => {
  const [selectedPayment, setSelectedPayment] = useState<string>("cash");

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(event.target.value);
  };

  console.log("selectedPayment", selectedPayment);

  return (
    <Root>
      <Title>Checkout</Title>
      <DetailsContentWrap>
        <Subtitle>Billing details</Subtitle>
        <DetailsContent>
          <TwoColumnsContainer>
            <FormStyledInput
              control={control}
              rules={validateRequired()}
              name={"name"}
              label={"Name"}
              placeholder="Name"
            />
            <FormStyledInput
              control={control}
              rules={validateRequired()}
              name={"email"}
              type={"email"}
              label={"E-mail address"}
              placeholder="E-mail address"
            />
            <FormStyledInput
              control={control}
              rules={validateRequired()}
              name={"phoneNumber"}
              label={"Phone Number"}
              placeholder="Phone number"
            />
          </TwoColumnsContainer>
        </DetailsContent>
      </DetailsContentWrap>
      <DetailsContentWrap>
        <Subtitle>Shipping info</Subtitle>
        <FormStyledInput
          control={control}
          rules={validateRequired()}
          name={"address"}
          label={"Address"}
          placeholder={"Address"}
        />
        <DetailsContent>
          <TwoColumnsContainer>
            <FormStyledInput
              control={control}
              rules={validateRequired()}
              name={"zipCode"}
              label={"ZIP code"}
              placeholder={"ZIP code"}
            />
            <FormStyledInput
              control={control}
              rules={validateRequired()}
              name={"city"}
              label={"City"}
              placeholder={"City"}
            />
            <FormStyledInput
              control={control}
              rules={validateRequired()}
              name={"country"}
              label={"Country"}
              placeholder={"Country"}
            />
          </TwoColumnsContainer>
        </DetailsContent>
      </DetailsContentWrap>
      <DetailsContentWrap>
        <Subtitle>Payment details</Subtitle>
        <TwoColumnsContainer>
          <Label>Payment Method</Label>
          <PaymentDetailsContent>
            <StyledInput
              id="e-money"
              type={"radio"}
              label={"e-Money"}
              value={"e-Money"}
              onChange={radioHandler}
            />
            <StyledInput
              defaultChecked
              id="cash-on-delivery"
              type={"radio"}
              label={"Cash on Delivery"}
              value={"cash"}
              onChange={radioHandler}
            />
          </PaymentDetailsContent>
          {selectedPayment === "e-Money" && (
            <>
              <FormStyledInput
                control={control}
                rules={validateRequired()}
                name={"eMoneyNumber"}
                label={"e-Money Number"}
                placeholder={"e-Money Number"}
              />
              <FormStyledInput
                control={control}
                rules={validateRequired()}
                name={"eMoneyPIN"}
                label={"e-Money PIN"}
                placeholder={"e-Money PIN"}
              />
            </>
          )}
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
