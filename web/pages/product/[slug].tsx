import groq from "groq";
import client from "../../client";
import { Container } from "../../libraries/components/Container";
import { ProductDetails } from "../../libraries/components/ProductPage/ProductDetails";
import { FeaturesDescription } from "../../libraries/components/ProductPage/FeaturesDescription";
import { Gallery } from "../../libraries/components/ProductPage/Gallery";
import { Recommendations } from "../../libraries/components/ProductPage/Recommendations";
import GoBackButton from "../../libraries/components/Buttons/GoBackButton";
import { SectionImageAndContent } from "../../libraries/components/SectionImageAndContent";
import { SiteConfiguration } from "../../libraries/models/site-configuration";
import { CategoriesMini } from "../../libraries/components/CategoriesMini";
import { ProductType } from "../../libraries/models/productType";

interface Props {
  product: ProductType;
  siteConfiguration: SiteConfiguration;
}

const Product = ({ product, siteConfiguration }: Props) => {
  return (
    <Container backgroundColor={"white"}>
      <GoBackButton />
      <ProductDetails product={product} />
      <FeaturesDescription product={product} />
      <Gallery product={product} />
      <Recommendations product={product} />
      <CategoriesMini
        miniCategories={siteConfiguration.siteConfiguration.miniCategories}
      />
      <SectionImageAndContent
        sectionImageAndContentSettings={
          siteConfiguration.siteConfiguration.sectionImageAndContent
        }
      />
    </Container>
  );
};

const query = groq`*[_type == "product" && slug.current == $slug][0]{
    id,
    isNewProduct,
    name, 
    slug,
    price,
    category,
    image {
    ...
    },
    productDescription,
    featuresDescription,
    inTheBox[]{
      quantity,
      title,
    },
    gallery[]{
        image,
    },
    recommendations[]{
      "recommendation": *[_type == "product" && _id == ^._ref][0] {
            name,
            slug,
            image {
                ...,
            },
          }
    },
}`;

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "product" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const product = await client.fetch(query, { slug });
  return {
    props: {
      product,
    },
  };
}
export default Product;
