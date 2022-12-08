import { FC } from "react";
import { styled } from "@portfolio-audiophile/styles";
import SanityBlockContent from "@sanity/block-content-to-react";
import Image from "../../../../components/Image";

const Root = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

const Details = styled("div", {
  display: "grid",
});

const Heading = styled("div", {});

const Subtitle = styled("div", {});

const Title = styled("div", {});

const Description = styled("div", {});

export type ProductPreviewProps = {
  product: any;
};

export const ProductPreview: FC<ProductPreviewProps> = ({ product }) => {
  return (
    <Root>
      <Image image={product.image.image} />
      <Details>
        <Heading>
          {product.isNewProduct && <Subtitle>New Product</Subtitle>}
          <Title>{product.name}</Title>
        </Heading>
        <Description>
          <SanityBlockContent />
        </Description>
      </Details>
    </Root>
  );
};
