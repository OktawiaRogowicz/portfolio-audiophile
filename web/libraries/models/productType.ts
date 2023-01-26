import { PortableTextProps } from "@portabletext/react";
import { ImageType } from "./image";
import { RecommendationsType } from "./recommendationsType";
import { CategoryType } from "./categoryType";

export type ProductType = {
  id: number;
  isNewProduct: boolean;
  name: string;
  slug: {
    current: string;
  };
  category: CategoryType;
  price: number;
  image: ImageType;
  sectionImages: {
    heroImage: ImageType;
    bigHighlight: ImageType;
    mediumHighlight: ImageType;
    smallHighlight: ImageType;
  };
  productDescription: PortableTextProps["blocks"];
  featuresDescription: PortableTextProps["blocks"];
  inTheBox: {
    quantity: number;
    title: string;
  }[];
  gallery: ImageType[];
  recommendations: RecommendationsType;
};
