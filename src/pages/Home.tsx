import Nav from "../components/Nav";
import Overlay from "../components/Overlay";
import SidebarMenu from "../components/SidebarMenu";
import { MenuContextProvider } from "../contexts/MenuContext";

function Home() {
  return (
    <MenuContextProvider>
      <div className="relative">
        <Nav />
        <SidebarMenu />
        <Overlay />
      </div>
    </MenuContextProvider>
  );
}

export default Home;
