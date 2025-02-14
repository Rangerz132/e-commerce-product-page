export type ProductItem = {
  id: string;
  name: string;
  description: string;
  company: string;
  price: number;
  discount: Discount;
};

export type Discount = { value: number; type: "number" | "percent" };

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
};
