import { FC, useState } from "react";
import { styled } from "../../styles/stitches";
import { PortableText } from "@portabletext/react";
import Media from "../Media";
import StyledNumberInput from "../StyledNumberInput";
import { StyledClickable } from "../StyledClickable";
import { useShoppingCartContext } from "../../context/shoppingCartContext";

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
    placeSelf: "auto",
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
  const { increaseCartQuantity } = useShoppingCartContext();
  const [quantity, setQuantity] = useState<number>(1);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleSubtract = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

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
          {product.name && <Title>{product.name}</Title>}
        </Heading>
        {product.productDescription && (
          <Description>
            <PortableText value={product.productDescription} />
          </Description>
        )}
        <Price>{`$ ${product.price}`}</Price>
        <LinkContainer>
          <AddToCartContainer>
            <StyledNumberInput
              value={quantity}
              handleAdd={handleAdd}
              handleSubtract={handleSubtract}
            />
            <StyledClickable
              onClick={() => increaseCartQuantity(product, quantity)}
              appearance={"primary"}
            >
              Add to cart
            </StyledClickable>
          </AddToCartContainer>
        </LinkContainer>
      </Details>
    </Root>
  );
};
