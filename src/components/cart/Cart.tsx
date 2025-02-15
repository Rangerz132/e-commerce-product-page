import { CartContext, useCartContext } from "../../contexts/CartContext";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const { cart } = useCartContext(CartContext);
  return (
    <div
      className={`absolute z-2 wrapper w-full mt-6 ${
        cart ? "inline-block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-lg shadow-xl ">
        <div className="font-bold p-6 border-b-[0.5px] border-b-neutral-200">
          Cart
        </div>
        <EmptyCart />
      </div>
    </div>
  );
};

export default Cart;
