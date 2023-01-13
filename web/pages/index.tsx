import { Container } from "../libraries/components/Container";
import { SectionHero } from "../libraries/components/Homepage/SectionHero";
import { getSiteConfiguration } from "../libraries/services/getSiteConfiguration";
import { SiteConfiguration } from "../libraries/models/site-configuration";
import { CategoriesMini } from "../libraries/components/CategoriesMini";
import { SectionImageAndContent } from "../libraries/components/SectionImageAndContent";
import { SectionProductsFeatured } from "../libraries/components/Homepage/SectionProductsFeatured/SectionProductsFeatured";

interface Props {
  siteConfiguration: SiteConfiguration;
}

const Home = ({ siteConfiguration }: Props) => {
  console.log("siteConfiguration: (index)", siteConfiguration);
  return (
    <Container backgroundColor={"transparent"}>
      <SectionHero
        sectionHeroSettings={siteConfiguration.siteConfiguration.sectionHero}
      />
      <CategoriesMini
        miniCategories={siteConfiguration.siteConfiguration.miniCategories}
      />
      <SectionProductsFeatured
        productsFeatured={
          siteConfiguration.siteConfiguration.sectionProductsFeatured
        }
      />
      <SectionImageAndContent
        sectionImageAndContentSettings={
          siteConfiguration.siteConfiguration.sectionImageAndContent
        }
      />
    </Container>
  );
};

async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
