import { ProductType } from "./productType";
import { FooterType } from "./footerType";
import { PortableTextProps } from "@portabletext/react";
import { ImageType } from "./image";
import { headerType } from "./headerType";

export type SiteConfiguration = {
  header: headerType;
  footer: FooterType;
  siteConfiguration: {
    sectionHero: {
      product: ProductType;
      description: PortableTextProps["blocks"];
    };
    sectionProductsFeatured: {
      bigHighlight: ProductType;
      description: PortableTextProps["blocks"];
      mediumHighlight: ProductType;
      smallHighlight: ProductType;
    };
    sectionImageAndContent: {
      title: string;
      description: PortableTextProps["blocks"];
      image: ImageType;
    };
    miniCategories: {
      link: {
        href: string;
        name: string;
        image: ImageType;
      };
    }[];
  };
};
