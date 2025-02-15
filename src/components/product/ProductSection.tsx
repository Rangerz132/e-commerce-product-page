import { ProductItem } from "../../data";
import AddToCartButton from "../button/AddToCartButton";
import Carousel from "../Carousel";
import ProductData from "./ProductData";

const ProductSection = (props: { productItem: ProductItem }) => {
  return (
    <section className="flex flex-col space-y-6 md:flex-row md:max-w-[1280px] md:space-y-0 md:mx-auto md:px-6 md:space-x-20  md:items-center">
      <Carousel slides={props.productItem.images} />
      <div className="max-w-[1280px] px-6 mx-auto md:px-0 md:max-w-none md:mx-0 flex flex-col space-y-6">
        <ProductData productItem={props.productItem} />
        <AddToCartButton />
      </div>
    </section>
  );
};

export default ProductSection;
