import groq from "groq";
import client from "../../client";
import { Container } from "../../libraries/components/Container";
import { CategoryHeader } from "../../libraries/components/CategoryHeader";
import { ProductPreviews } from "../../libraries/components/CategoryPage/ProductPreviews";
import { CategoriesMini } from "../../libraries/components/CategoriesMini";
import { SectionImageAndContent } from "../../libraries/components/SectionImageAndContent";
import { getSiteConfiguration } from "../../libraries/services/getSiteConfiguration";
import { SiteConfiguration } from "../../libraries/models/site-configuration";

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
  siteConfiguration: SiteConfiguration;
}

const Category = ({ category, siteConfiguration }: Props) => {
  return (
    <>
      <CategoryHeader categoryName={category.name} />
      <Container backgroundColor={"white"}>
        <ProductPreviews products={category.products} />
        <CategoriesMini
          miniCategories={siteConfiguration.siteConfiguration.miniCategories}
        />
        <SectionImageAndContent
          sectionImageAndContentSettings={
            siteConfiguration.siteConfiguration.sectionImageAndContent
          }
        />
      </Container>
    </>
  );
};

const query = groq`*[_type == "category" && slug.current == $slug][0]{
    name, 
    slug,
    _id,
    "products": *[_type == 'product' && references(^._id)] {
        id,
        isNewProduct,
        name,
        slug,
        category,
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

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const category = await client.fetch(query, { slug });
  const siteConfiguration = await getSiteConfiguration();
  return {
    props: {
      category,
      siteConfiguration,
    },
  };
}
export default Category;
