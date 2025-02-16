import { useSelector } from "react-redux";
import CartIcon from "../../assets/images/icon-cart.svg";
import { CartContext, useCartContext } from "../../contexts/CartContext";
import { RootState } from "../../state/store";

const CartButton = () => {
  const { setCart } = useCartContext(CartContext);
  const cartProductList = useSelector((store: RootState) => store.cart.cart);

  return (
    <div
      onClick={() => setCart((prevState) => !prevState)}
      className="cursor-pointer relative"
    >
      <img src={CartIcon} alt={"Cart icon"} />
      {cartProductList.length > 0 && (
        <div className="bg-primary-orange rounded-full border border-white w-5 h-5 absolute -right-3 -top-3 flex items-center justify-center">
          <span className="text-white text-xs">{cartProductList.length}</span>
        </div>
      )}
    </div>
  );
};

export default CartButton;
