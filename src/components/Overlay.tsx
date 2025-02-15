import { MenuContext, useMenuContext } from "../contexts/MenuContext";

const Overlay = () => {
  const { menu } = useMenuContext(MenuContext);

  return (
    <div
      className={`fixed z-2 left-0 top-0 w-screen h-screen transition-all duration-300 ${
        menu
          ? "opacity-75 bg-black pointer-events-auto"
          : "opacity-0 pointer-events-none"
      } `}
    ></div>
  );
};

export default Overlay;
