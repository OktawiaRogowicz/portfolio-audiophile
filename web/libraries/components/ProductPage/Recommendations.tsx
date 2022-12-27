import { FC } from "react";
import { styled } from "../../styles/stitches";
import { SectionWrapper } from "../SectionWrapper";
import Media from "../Media";
import { Link } from "../Link";

const Root = styled("div", {
  display: "grid",
  gap: "$64",
});

const Title = styled("div", {
  projectFont: "heading02",
  textAlign: "center",
});

const Products = styled("div", {
  display: "grid",
  gap: "$56",
  gridAutoFlow: "rows",
  "@md": {
    gap: "$32",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

const Product = styled("div", {
  display: "grid",
  justifyContent: "center",
  gap: "$40",
  a: {
    placeSelf: "center",
  },
});

const ProductTitle = styled("div", {
  textAlign: "center",
  projectFont: "heading05",
});

const ProductImage = styled("div", {
  img: {
    borderRadius: "10px",
    objectFit: "contain",
    backgroundColor: "$gray",
    aspectRatio: "5/2",
    "@md": {
      aspectRatio: "3/4",
    },
    "@lg": {
      aspectRatio: "4/3",
    },
  },
});

export type RecommendationsProps = {
  product: any;
};

export const Recommendations: FC<RecommendationsProps> = ({ product }) => {
  console.log("recommendations: ", product.recommendations);
  return (
    <SectionWrapper margin={"M"}>
      <Root>
        <Title>You may also like</Title>
        <Products>
          {product.recommendations.map((item) => {
            return (
              <Product>
                <ProductImage>
                  <Media image={item.recommendation.image.image} />
                </ProductImage>
                <ProductTitle>{item.recommendation.name}</ProductTitle>
                <Link
                  appearance={"primary"}
                  href={`/product/${item.recommendation.slug.current}`}
                >
                  See product
                </Link>
              </Product>
            );
          })}
        </Products>
      </Root>
    </SectionWrapper>
  );
};
