import { PortableTextProps } from "@portabletext/react";

export type Product = {
  id: number;
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
  productDescription: PortableTextProps["blocks"];
  featuresDescription: PortableTextProps["blocks"];
  inTheBox: {
    quantity: number;
    title: string;
  }[];
  gallery: any[];
  recommendations: {
    recommendation: Product;
  }[];
};
