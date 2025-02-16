import { Outlet } from "react-router";
import Cart from "../components/cart/Cart";
import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import SidebarMenu from "../components/SidebarMenu";
import { CartContextProvider } from "../contexts/CartContext";
import { MenuContextProvider } from "../contexts/MenuContext";

function Layout() {
  return (
    <MenuContextProvider>
      <CartContextProvider>
        <div className="relative">
          <Nav />
          <SidebarMenu />
          <Overlay />
          <Cart />
          <Outlet />
        </div>
      </CartContextProvider>
    </MenuContextProvider>
  );
}

export default Layout;
