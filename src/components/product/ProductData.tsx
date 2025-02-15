import { setDiscount } from "../../services/DiscountService";
import { ProductItem } from "../../data";

const ProductData = (props: { productItem: ProductItem }) => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex flex-col space-y-2">
        {/** Product company */}
        <span className="uppercase font-semibold text-sm tracking-widest text-neutral-dark-grayish-blue">
          {props.productItem.company}
        </span>
        {/** Product name */}
        <h1 className="capitalize font-bold text-3xl md:text-5xl">
          {props.productItem.name}
        </h1>
      </div>

      {/** Product description */}
      <p className="text-neutral-dark-grayish-blue">
        {props.productItem.description}
      </p>

      {/** Product price */}
      <div className="flex flex-row items-center justify-between md:flex-col md:items-start md:space-y-3">
        <div className="flex flex-row space-x-4 items-center justify-between">
          {/** Product final price */}
          <h1 className="font-bold text-3xl">
            $
            {setDiscount(
              props.productItem.price,
              props.productItem.discount
            ).toFixed(2)}
          </h1>
          {/** Product discount */}
          <div className="px-2 py-1 rounded-lg bg-neutral-very-dark-blue text-white font-semibold">
            <span>
              {props.productItem.discount.value}
              {props.productItem.discount.type === "number" ? "$" : "%"}
            </span>
          </div>
        </div>
        {/** Product intial price */}
        {props.productItem.discount.value !== 0 && (
          <span className="font-semibold text-neutral-dark-grayish-blue line-through">
            ${props.productItem.price.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductData;
