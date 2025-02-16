import IncrementButton from "../button/IncrementButton";
import AddToCartButton from "../button/AddToCartButton";
import { ProductItem } from "../../data";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../state/cart/cartSlice";

const ProductAddToCart = (props: { productItem: ProductItem }) => {
  const [value, setValue] = useState<number>(0);
  const dispatch = useDispatch();

  function addToCart() {
    if (value <= 0) {
      return;
    }
    dispatch(addProduct({ productItem: props.productItem, amount: value }));
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
