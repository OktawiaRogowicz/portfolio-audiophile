import groq from "groq";
import client from "../../client";
import { Container } from "../../libraries/components/Container";
import { CategoryHeader } from "../../libraries/components/CategoryHeader";
import { ProductPreviews } from "../../libraries/components/CategoryPage/ProductPreviews";
import { CategoriesMini } from "../../libraries/components/CategoriesMini";
import { SectionImageAndContent } from "../../libraries/components/SectionImageAndContent";
import { SiteConfiguration } from "../../libraries/models/site-configuration";
import { ProductType } from "../../libraries/models/productType";
import { ImageType } from "../../libraries/models/image";
import { RecommendationsType } from "../../libraries/models/recommendationsType";
import { CategoryType } from "../../libraries/models/categoryType";

interface Props {
  category: CategoryType;
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
  return {
    props: {
      category,
    },
  };
}
export default Category;
