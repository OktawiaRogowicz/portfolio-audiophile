import { BlockContentProps as SanityBlockContentProps } from "@sanity/block-content-to-react";

export type SiteConfiguration = {
  header: any;
  footer: {
    description: SanityBlockContentProps["blocks"];
    copyright: string;
    socialMedia: any;
  };
  siteConfiguration: {
    sectionHero: {
      product: any;
      description: SanityBlockContentProps["blocks"];
    };
    sectionImageAndContent: {
      title: string;
      description: SanityBlockContentProps["blocks"];
      image: any;
    };
    miniCategories: {
      link: {
        href: string;
        name: string;
        image: any;
      };
    }[];
  };
};
