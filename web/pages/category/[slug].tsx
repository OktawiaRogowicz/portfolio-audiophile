import groq from "groq";
import client from "../../client";
import { styled } from "@portfolio-audiophile/styles";
import { Container } from "../../libs/services/src/lib/Container";
import { CategoryHeader } from "../../libs/services/src/lib/CategoryHeader";
import { ProductPreviews } from "../../libs/services/src/lib/CategoryPage/ProductPreviews";
import { CategoriesMini } from "../../libs/services/src/lib/CategoriesMini";
import { SectionImageAndContent } from "../../libs/services/src/lib/SectionImageAndContent";
import { getSiteConfiguration } from "../../libs/services/src/lib/getSiteConfiguration";
import { SiteConfiguration } from "../../libs/services/src/lib/models/site-configuration";

const Root = styled("div", {
  padding: "$64 0",
  "@md": {
    padding: "$120 0",
  },
  "@lg": {
    padding: "$160 0",
  },
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
  siteConfiguration: SiteConfiguration;
}

const Category = ({ category, siteConfiguration }: Props) => {
  return (
    <>
      <CategoryHeader categoryName={category.name} />
      <Container backgroundColor={"white"}>
        <Root>
          <ProductPreviews products={category.products} />
        </Root>
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
