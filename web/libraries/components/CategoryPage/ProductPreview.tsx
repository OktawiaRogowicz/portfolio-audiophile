import { FC } from "react";
import { PortableText } from "@portabletext/react";
import Media from "../Media";
import { Link } from "../Link";
import { styled } from "../../styles/stitches";

const Root = styled("div", {
  display: "grid",
  gap: "0 $32",
  justifyContent: "center",
  gridTemplateRows: "auto 1fr",
  "@md": {
    gap: "0 $56",
  },
  "@lg": {
    gridTemplateColumns: "1fr 1fr",
    gap: "0 $120",
  },
});

const MediaContainer = styled("div", {
  display: "grid",
  backgroundColor: "$gray",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$r1",
  "@lg": {
    justifyContent: "right",
    marginRight: "0",
    marginLeft: "auto",
  },
  variants: {
    appearance: {
      imageLeft: {
        "@lg": {
          order: "1",
        },
      },
      imageRight: {
        "@lg": {
          order: "2",
        },
      },
    },
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
  "@lg": {
    maxWidth: "none",
  },
});

const Details = styled("div", {
  display: "grid",
  gridTemplateRows: "auto auto auto 1fr",
  gap: "$32",
  textAlign: "center",
  justifyContent: "center",
  "@lg": {
    paddingTop: "$108",
    justifyContent: "left",
    textAlign: "left",
  },
  variants: {
    appearance: {
      imageLeft: {
        "@lg": {
          order: "2",
        },
      },
      imageRight: {
        "@lg": {
          order: "1",
        },
      },
    },
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
  display: "grid",
  justifyContent: "center",
  projectFont: "body01",
  color: "$black05",
  div: {
    maxWidth: "$maxWidthXS",
  },
  "@lg": {
    justifyContent: "left",
  },
});

const LinkContainer = styled("div", {
  display: "grid",
  justifyContent: "center",
  "@lg": {
    justifyContent: "left",
  },
});

export type ProductPreviewProps = {
  product: any;
  position?: number;
};

export const ProductPreview: FC<ProductPreviewProps> = ({
  product,
  position = 0,
}) => {
  const variant = position == 0 ? "imageLeft" : "imageRight";

  return (
    <Root>
      <MediaContainer appearance={variant}>
        <MediaContainer2>
          <Media image={product.image.image} />
        </MediaContainer2>
      </MediaContainer>
      <Details appearance={variant}>
        <Heading>
          {product.isNewProduct && <Subtitle>New Product</Subtitle>}
          <Title>{product.name}</Title>
        </Heading>
        <Description>
          <div>
            <PortableText value={product.productDescription} />
          </div>
        </Description>
        <LinkContainer>
          <Link
            appearance={"primary"}
            href={`/product/${product.slug.current}`}
          >
            See product
          </Link>
        </LinkContainer>
      </Details>
    </Root>
  );
};
