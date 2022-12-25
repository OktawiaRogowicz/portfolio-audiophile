import { ChangeEventHandler, FC, useState } from "react";
import { styled } from "@portfolio-audiophile/styles";
import SanityBlockContent from "@sanity/block-content-to-react";
import Media from "../../../../../components/Media";
import { Link } from "../Link";
import StyledNumberInput from "../../../../../components/StyledNumberInput";

const Root = styled("div", {
  display: "grid",
  gap: "$32 0",
  justifyContent: "center",
  gridTemplateRows: "auto 1fr",
  "@md": {
    gap: "0 $72",
    gridTemplateColumns: "1fr 1fr",
  },
  "@lg": {
    gap: "0 $120",
  },
});

const MediaContainer = styled("div", {
  display: "grid",
  backgroundColor: "$gray",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  "@md": {
    justifyContent: "right",
    marginRight: "0",
    marginLeft: "auto",
  },
});

const MediaContainer2 = styled("div", {
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  placeSelf: "center",
  maxWidth: "none",
  "@sm": {
    maxWidth: "50%",
  },
  "@md": {
    maxWidth: "none",
  },
});

const Details = styled("div", {
  display: "grid",
  gridTemplateRows: "auto auto auto auto 1fr",
  gap: "$32",
  justifyContent: "left",
  textAlign: "left",
  "@md": {
    paddingTop: "$80",
  },
  "@lg": {
    paddingTop: "$108",
  },
});

const Heading = styled("div", {
  display: "grid",
  gap: "$16",
});

const Subtitle = styled("div", {
  projectFont: "overline",
  color: "$orange",
});

const Title = styled("div", {
  projectFont: "heading02",
});

const Description = styled("div", {
  projectFont: "body01",
  color: "$black05",
  placeSelf: "center",
  "@md": {
    maxWidth: "$maxWidthXS",
    placeSelf: "left",
  },
});

const Price = styled("div", {
  projectFont: "heading06",
});

const AddToCartContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: "$16",
});

const LinkContainer = styled("div", {
  display: "flex",
});

export type ProductDetailsProps = {
  product: any;
};

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <Root>
      <MediaContainer>
        <MediaContainer2>
          <Media image={product.image.image} />
        </MediaContainer2>
      </MediaContainer>
      <Details>
        <Heading>
          {product.isNewProduct && <Subtitle>New Product</Subtitle>}
          <Title>{product.name}</Title>
        </Heading>
        <Description>
          <SanityBlockContent blocks={product.productDescription} />
        </Description>
        <Price>{`$ ${product.price}`}</Price>
        <LinkContainer>
          <AddToCartContainer>
            <StyledNumberInput />
            <Link
              appearance={"primary"}
              href={`/product/${product.slug.current}`}
            >
              Add to cart
            </Link>
          </AddToCartContainer>
        </LinkContainer>
      </Details>
    </Root>
  );
};
