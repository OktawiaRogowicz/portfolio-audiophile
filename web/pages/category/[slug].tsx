import groq from "groq";
import client from "../../client";
import Link from "next/link";
import { styled } from "@portfolio-audiophile/styles";
import { Container } from "../../libs/services/src/lib/Container";
import { CategoryHeader } from "../../libs/services/src/lib/CategoryHeader";
import { ProductPreview } from "../../libs/services/src/lib/ProductPreview";

const Root = styled("div", {
  padding: "$168 0",
});

interface Props {
  category: {
    name: string;
    products: {
      name: string;
      slug: {
        current: string;
      };
    }[];
  };
}

const Category = ({ category }: Props) => {
  return (
    <>
      <CategoryHeader categoryName={category.name} />
      <Container backgroundColor={"white"}>
        <Root>
          {category.products &&
            category.products.length > 0 &&
            category.products.map((product) => {
              return <ProductPreview product={product} />;
            })}
        </Root>
      </Container>
    </>
  );
};

const query = groq`*[_type == "category" && slug.current == $slug][0]{
    name, 
    slug,
    _id,
    "products": *[_type == 'product' && references(^._id)] {
        isNewProduct,
        name,
        slug,
        image {
            ...
        },
        productDescription,
        featuresDescription,
    }
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)][].slug.current`
  );
  console.log("paths: ", paths);

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  console.log("context: ", context);
  const category = await client.fetch(query, { slug });
  return {
    props: {
      category,
    },
  };
}
export default Category;
