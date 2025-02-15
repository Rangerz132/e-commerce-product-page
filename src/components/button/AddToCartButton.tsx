import Button from "./Button";
import CartIcon from "../../assets/images/icon-cart.svg";

const AddToCartButton = () => {
  return (
    <Button
      className="button-1 w-full py-3 flex justify-center items-center space-x-3"
      onClick={() => {}}
    >
      <img src={CartIcon} alt={"Cart icon"} />
      <span> Add to cart</span>
    </Button>
  );
};

export default AddToCartButton;
