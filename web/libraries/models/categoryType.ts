import { ImageType } from "./image";
import { ProductType } from "./productType";

export type CategoryType = {
  name: string;
  slug: {
    current: string;
  };
  image: ImageType;
  products: ProductType[];
};
