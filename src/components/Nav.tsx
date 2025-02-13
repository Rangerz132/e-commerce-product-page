import HamburgerIcon from "../assets/images/icon-menu.svg";
import CartIcon from "../assets/images/icon-cart.svg";
import Logo from "./Logo";
import UserButton from "./UserButton";
import { MenuContext, useMenuContext } from "../contexts/MenuContext";

const Nav = () => {
  const { setMenu } = useMenuContext(MenuContext);

  function handleHamburgerClick() {
    setMenu((prevState) => !prevState);
  }

  return (
    <div className="bg-white py-6 border-b border-neutral-200">
      <div className="wrapper flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-4">
          {/** Hamburger */}
          <div
            onClick={() => handleHamburgerClick()}
            className="cursor-pointer"
          >
            <img src={HamburgerIcon} alt={"Menu icon"} />
          </div>
          {/** Logo */}
          <Logo />
        </div>
        <div className="flex flex-row items-center space-x-4">
          {/** Cart */}
          <div className="cursor-pointer">
            <img src={CartIcon} alt={"Cart icon"} />
          </div>
          {/** User */}
          <UserButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
