import { ProductItem } from "./data";

export type ImageType = {
  src: string;
  alt: string;
};

export type Discount = { value: number; type: "number" | "percent" };

export type CartProductItem = {
  productItem: ProductItem;
  amount: number;
};
