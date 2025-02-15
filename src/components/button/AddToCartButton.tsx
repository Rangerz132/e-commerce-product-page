import Button from "./Button";
import CartIcon from "../../assets/images/icon-cart.svg";

const AddToCartButton = (props: { onAddToCart: () => void }) => {
  return (
    <Button
      className="button-1 py-4 flex justify-center items-center space-x-3 w-full"
      onClick={() => props.onAddToCart()}
    >
      <img src={CartIcon} alt={"Cart icon"} />
      <span> Add to cart</span>
    </Button>
  );
};

export default AddToCartButton;
