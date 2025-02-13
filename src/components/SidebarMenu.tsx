import Menu from "./Menu";
import CloseIcon from "../assets/images/icon-close.svg";
import { MenuContext, useMenuContext } from "../contexts/MenuContext";

const SidebarMenu = () => {
  const { menu, setMenu } = useMenuContext(MenuContext);

  function handleCloseClick() {
    setMenu((prevState) => !prevState);
  }

  return (
    <div
      className={`w-[70%] h-screen bg-white p-6 absolute z-3 border-r border-neutral-200 top-0 ${
        menu ? "left-0" : "-left-[70%]"
      } transition-all duration-300`}
    >
      <div className="flex flex-col space-y-10">
        {/** Close button */}
        <div onClick={() => handleCloseClick()} className="cursor-pointer">
          <img src={CloseIcon} alt={"Close icon"} />
        </div>
        {/** Menu */}
        <Menu />
      </div>
    </div>
  );
};

export default SidebarMenu;
