import { CartContext, useCartContext } from "../../contexts/CartContext";
import { CART_SNEAKER_1 } from "../../data";
import CartItem from "./CartItem";
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
        <div className="p-6">
          <CartItem cartProductItem={CART_SNEAKER_1} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
