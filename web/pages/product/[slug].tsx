import groq from "groq";
import client from "../../client";
import { Container } from "../../libs/services/src/lib/Container";
import { ProductDetails } from "../../libs/services/src/lib/ProductPage/ProductDetails";
import { FeaturesDescription } from "../../libs/services/src/lib/ProductPage/FeaturesDescription";
import { Gallery } from "../../libs/services/src/lib/ProductPage/Gallery";
import { Recommendations } from "../../libs/services/src/lib/ProductPage/Recommendations";
import GoBackButton from "../../libs/services/src/lib/Buttons/GoBackButton";
import { SectionImageAndContent } from "../../libs/services/src/lib/SectionImageAndContent";
import { getSiteConfiguration } from "../../libs/services/src/lib/getSiteConfiguration";
import { SiteConfiguration } from "../../libs/services/src/lib/models/site-configuration";
import { CategoriesMini } from "../../libs/services/src/lib/CategoriesMini";

interface Props {
  product: {
    name: string;
  };
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
      <SectionImageAndContent siteConfiguration={siteConfiguration} />
    </Container>
  );
};

const query = groq`*[_type == "product" && slug.current == $slug][0]{
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
  const siteConfiguration = await getSiteConfiguration();
  return {
    props: {
      product,
      siteConfiguration,
    },
  };
}
export default Product;
