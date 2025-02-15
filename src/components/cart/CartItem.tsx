import { CartProductItem } from "../../types";
import TrashIcon from "../../assets/images/icon-delete.svg";
import { setDiscount } from "../../services/DiscountService";

const CartItem = (props: { cartProductItem: CartProductItem }) => {
  function getProductPriceWithDiscount(): number {
    return setDiscount(
      props.cartProductItem.productItem.price,
      props.cartProductItem.productItem.discount
    );
  }
  return (
    <div className="flex flex-row space-x-4 justify-between items-center ">
      {/** Product Image */}
      <div className="rounded-md overflow-hidden aspect-square basis-1/6">
        <img
          src={props.cartProductItem.productItem.images[0].src}
          alt={props.cartProductItem.productItem.images[0].alt}
        />
      </div>
      {/** Product description */}
      <div className="flex flex-col">
        <div className="text-neutral-dark-grayish-blue">
          {props.cartProductItem.productItem.name}
        </div>
        <div className="text-neutral-dark-grayish-blue">
          ${getProductPriceWithDiscount().toFixed(2)} x{" "}
          {props.cartProductItem.amount}{" "}
          <span className="text-black font-bold">
            $
            {(
              getProductPriceWithDiscount() * props.cartProductItem.amount
            ).toFixed(2)}
          </span>
        </div>
      </div>
      {/** Delete Product */}
      <div className="basis-1/6 flex items-center justify-center cursor-pointer">
        <img src={TrashIcon} alt={"Trash icon"} />
      </div>
    </div>
  );
};

export default CartItem;
