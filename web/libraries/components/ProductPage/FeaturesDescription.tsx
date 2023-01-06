import { FC } from "react";
import { styled } from "../../styles/stitches";
import { PortableText } from "@portabletext/react";
import { SectionWrapper } from "../SectionWrapper";

export type FeaturesDescriptionProps = {
  product: any;
};

const Root = styled("div", {
  display: "grid",
  gap: "$120",
  "@lg": {
    gridTemplateColumns: "3fr 2fr",
    gap: "$120",
  },
});

const FeaturesContainer = styled("div", {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: "$24",
  "@md": {
    gap: "$32",
  },
});

const InTheBoxContainer = styled("div", {
  display: "grid",
  gap: "$24",
  "@md": {
    gap: "$32",
    gridTemplateColumns: "1fr 1fr",
  },
  "@lg": {
    gridTemplateColumns: "none",
    gridTemplateRows: "auto 1fr",
  },
});

const Title = styled("div", {
  projectFont: "heading03",
});

const Description = styled("div", {
  projectFont: "body01",
  color: "$black05",
  span: {
    color: "$orange",
  },
});

const BoxItem = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "$24",
});

export const FeaturesDescription: FC<FeaturesDescriptionProps> = ({
  product,
}) => {
  return (
    <SectionWrapper margin={"M"}>
      <Root>
        <FeaturesContainer>
          <Title>Features</Title>
          {product.featuresDescription && (
            <Description>
              <PortableText value={product.featuresDescription} />
            </Description>
          )}
        </FeaturesContainer>
        <InTheBoxContainer>
          <Title>In the box</Title>
          <Description>
            {product.inTheBox &&
              product.inTheBox.map((item, index: number) => {
                return (
                  <BoxItem key={`boxItem-${product.slug.current}-${index}`}>
                    <span>{item.quantity}x</span>
                    <p>{item.title}</p>
                  </BoxItem>
                );
              })}
          </Description>
        </InTheBoxContainer>
      </Root>
    </SectionWrapper>
  );
};
