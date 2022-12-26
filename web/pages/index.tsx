import { Container } from "../libs/services/src/lib/Container";
import { SectionHero } from "../libs/services/src/lib/Homepage/SectionHero";
import { getSiteConfiguration } from "../libs/services/src/lib/getSiteConfiguration";
import { SiteConfiguration } from "../libs/services/src/lib/models/site-configuration";
import { CategoriesMini } from "../libs/services/src/lib/CategoriesMini";
import { SectionImageAndContent } from "../libs/services/src/lib/SectionImageAndContent";

interface Props {
  siteConfiguration: SiteConfiguration["siteConfiguration"];
}

const Home = ({ siteConfiguration }: Props) => {
  console.log("siteConfiguration: ", siteConfiguration);
  return (
    <Container backgroundColor={"transparent"}>
      <SectionHero sectionHeroSettings={siteConfiguration.sectionHero} />
      <CategoriesMini miniCategories={siteConfiguration.miniCategories} />
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
