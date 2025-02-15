import Cart from "../components/cart/Cart";
import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import ProductSection from "../components/product/ProductSection";
import SidebarMenu from "../components/SidebarMenu";
import { CartContextProvider } from "../contexts/CartContext";
import { MenuContextProvider } from "../contexts/MenuContext";
import { SNEAKER_1 } from "../data";

function Home() {
  return (
    <MenuContextProvider>
      <CartContextProvider>
        <div className="relative">
          <Nav />
          <SidebarMenu />
          <Overlay />
          <Cart />
          <ProductSection productItem={SNEAKER_1} />
        </div>
      </CartContextProvider>
    </MenuContextProvider>
  );
}

export default Home;
