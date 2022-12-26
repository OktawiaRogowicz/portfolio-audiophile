import groq from "groq";
import { SiteConfiguration } from "./models/site-configuration";
import { sanityClient } from "./getClient";

export const getSiteConfiguration = async (): Promise<SiteConfiguration> => {
  const headerProjection = groq`
      *[_type == "header"][0]{
        logo,
        menu[] {
          ...,
          "link": *[_type == "category" && _id == ^._ref][0] {
            "href": slug.current,
            name,
          }
        }
      }
`;

  const footerProjection = groq`
      *[_type == "footer"][0]{
        description,
        copyright,
        socialMedia
      }
`;

  const siteConfigurationProjection = groq`
      *[_type == "siteConfiguration"][0]{
        sectionHero {
          ...,
          description,
          "product": *[_type == "product" && _id == ^.product._ref][0] {
            isNewProduct,
            name,
            "href": slug.current,
            heroImage {
              ...
            },
          },
        },
        sectionImageAndContent {
          title,
          description,
          image {
            ...
          },
        },
        miniCategories[] {
          ...,
          "link": *[_type == "category" && _id == ^._ref][0] {
            "href": slug.current,
            name,
            image {
              ...
            },
          },
        },
      }
`;

  const siteConfigurationQuery = groq`
  {
      "header": ${headerProjection},
      "footer": ${footerProjection},
      "siteConfiguration": ${siteConfigurationProjection},
  }
`;

  const siteConfigurationData = await sanityClient.fetch(
    siteConfigurationQuery
  );

  const data = {
    ...siteConfigurationData,
  };

  return data;
};
