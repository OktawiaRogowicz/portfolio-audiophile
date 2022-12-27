import { Container } from "../libraries/components/Container";
import { SectionHero } from "../libraries/components/Homepage/SectionHero";
import { getSiteConfiguration } from "../libraries/services/getSiteConfiguration";
import { SiteConfiguration } from "../libraries/models/site-configuration";
import { CategoriesMini } from "../libraries/components/CategoriesMini";
import { SectionImageAndContent } from "../libraries/components/SectionImageAndContent";
import { SectionProductsFeatured } from "../libraries/components/Homepage/SectionProductsFeatured/SectionProductsFeatured";

interface Props {
  siteConfiguration: SiteConfiguration["siteConfiguration"];
}

const Home = ({ siteConfiguration }: Props) => {
  console.log("siteConfiguration: ", siteConfiguration);
  return (
    <Container backgroundColor={"transparent"}>
      <SectionHero sectionHeroSettings={siteConfiguration.sectionHero} />
      <CategoriesMini miniCategories={siteConfiguration.miniCategories} />
      <SectionProductsFeatured
        productsFeatured={siteConfiguration.sectionProductsFeatured}
      />
      <SectionImageAndContent
        sectionImageAndContentSettings={
          siteConfiguration.sectionImageAndContent
        }
      />
    </Container>
  );
};

async function getStaticProps() {
  const siteConfiguration = await getSiteConfiguration();
  return {
    props: {
      siteConfiguration,
    },
  };
}

export default Home;
