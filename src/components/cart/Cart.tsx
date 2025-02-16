import { useSelector } from "react-redux";
import { CartContext, useCartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { RootState } from "../../state/store";

const Cart = () => {
  const { cart } = useCartContext(CartContext);
  const cartProductList = useSelector((store: RootState) => store.cart.cart);

  return (
    <div className="wrapper relative ">
      <div
        className={`absolute z-2 w-full mt-6 px-6 top-0 left-0 md:max-w-[40%] md:right-0 md:left-auto ${
          cart ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white rounded-lg shadow-xl w-full">
          <div className="font-bold p-6 border-b-[0.5px] border-b-neutral-200">
            Cart
          </div>
          <div className="p-6 w-full">
            {cartProductList.length == 0 ? (
              <EmptyCart />
            ) : (
              cartProductList.map((item, index) => (
                <CartItem key={index} cartProductItem={item} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
