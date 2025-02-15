import { CartProductItem, Discount, ImageType } from "./types";
import ProductImage1 from "./assets/images/image-product-1.jpg";
import ProductImage2 from "./assets/images/image-product-2.jpg";
import ProductImage3 from "./assets/images/image-product-3.jpg";
import ProductImage4 from "./assets/images/image-product-4.jpg";

export type ProductItem = {
  id: string;
  name: string;
  description: string;
  company: string;
  price: number;
  discount: Discount;
  images: ImageType[];
};

export const SNEAKER_1: ProductItem = {
  id: "1",
  name: "Fall limited edition sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  company: "Sneaker Company",
  price: 250,
  discount: {
    value: 50,
    type: "percent",
  },
  images: [
    {
      src: ProductImage1,
      alt: "Fall limited edition sneakers image 1",
    },
    {
      src: ProductImage2,
      alt: "Fall limited edition sneakers image 2",
    },
    {
      src: ProductImage3,
      alt: "Fall limited edition sneakers image 3",
    },
    {
      src: ProductImage4,
      alt: "Fall limited edition sneakers image 4",
    },
  ],
};

export const CART_SNEAKER_1: CartProductItem = {
  productItem: SNEAKER_1,
  amount: 3,
};
