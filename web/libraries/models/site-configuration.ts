import { PortableTextProps } from "@portabletext/react";
import { Product } from "./product";

export type SiteConfiguration = {
  header: any;
  footer: {
    description: PortableTextProps["blocks"];
    copyright: string;
    socialMedia: any;
  };
  siteConfiguration: {
    sectionHero: {
      product: Product;
      description: SanityBlockContentProps["blocks"];
    };
    sectionProductsFeatured: {
      bigHighlight: Product;
      description: SanityBlockContentProps["blocks"];
      mediumHighlight: Product;
      smallHighlight: Product;
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
