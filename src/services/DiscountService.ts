import { Discount } from "../data";

export function setDiscount(price: number, discount: Discount): number {
  if (discount.value === 0) {
    return price;
  }

  if (discount.type === "number") {
    return price - discount.value;
  } else {
    const discountValue = (price * discount.value) / 100;
    return price - discountValue;
  }

  return price;
}
