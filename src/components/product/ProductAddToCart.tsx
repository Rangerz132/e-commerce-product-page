import IncrementButton from "../button/IncrementButton";
import AddToCartButton from "../button/AddToCartButton";
import { ProductItem } from "../../data";
import { useState } from "react";

const ProductAddToCart = (props: { productItem: ProductItem }) => {
  const [value, setValue] = useState<number>(0);

  function addToCart() {
    console.log(`${props.productItem.name} added ${value}x`);
  }

  return (
    <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-4">
      <div className="basis-1/2">
        <IncrementButton value={value} setValue={setValue} />
      </div>

      <AddToCartButton onAddToCart={() => addToCart()} />
    </div>
  );
};

export default ProductAddToCart;
