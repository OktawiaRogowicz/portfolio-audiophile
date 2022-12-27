import { BlockContentProps as SanityBlockContentProps } from "@sanity/block-content-to-react";

export type Product = {
  isNewProduct: boolean;
  name: string;
  slug: {
    current: string;
  };
  category: any;
  price: number;
  image: any;
  sectionImages: {
    heroImage: any;
    bigHighlight: any;
    mediumHighlight: any;
    smallHighlight: any;
  };
  productDescription: SanityBlockContentProps["blocks"];
  featuresDescription: SanityBlockContentProps["blocks"];
  inTheBox: {
    quantity: number;
    title: string;
  }[];
  gallery: any[];
  recommendations: Product[];
};
