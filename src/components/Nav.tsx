import HamburgerIcon from "../assets/images/icon-menu.svg";
import Logo from "./Logo";
import UserButton from "./button/UserButton";
import { MenuContext, useMenuContext } from "../contexts/MenuContext";
import Menu from "./Menu";
import CartButton from "./cart/CartButton";

const Nav = () => {
  const { setMenu } = useMenuContext(MenuContext);

  return (
    <div className="bg-white py-6 border-b border-neutral-200 md:py-0">
      <div className="wrapper flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-4 md:space-x-10">
          {/** Hamburger */}
          <div
            onClick={() => setMenu((prevState) => !prevState)}
            className="cursor-pointer md:hidden"
          >
            <img src={HamburgerIcon} alt={"Menu icon"} />
          </div>
          {/** Logo */}
          <Logo />
          {/** Desktop menu */}
          <div className="hidden md:flex">
            <Menu />
          </div>
        </div>
        <div className="flex flex-row items-center space-x-4 md:space-x-10">
          {/** Cart button */}
          <CartButton />
          {/** User button */}
          <UserButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
