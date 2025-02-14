import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import Product from "../components/Product";
import SidebarMenu from "../components/SidebarMenu";
import { MenuContextProvider } from "../contexts/MenuContext";
import { SNEAKER_1 } from "../data";

function Home() {
  return (
    <MenuContextProvider>
      <div className="relative">
        <Nav />
        <SidebarMenu />
        <Overlay />
        <Product productItem={SNEAKER_1} />
      </div>
    </MenuContextProvider>
  );
}

export default Home;
