import { MenuContext, useMenuContext } from "../contexts/MenuContext";
import { routeMap } from "../routes";
import { Link } from "react-router";

const Menu = () => {
  const { setMenu } = useMenuContext(MenuContext);

  function handleLinkClick() {
    setMenu((prevState) => !prevState);
  }

  return (
    <div className="flex flex-col space-y-6">
      {Array.from(routeMap.entries()).map(([key, route]) => (
        <Link
          key={key}
          to={route.path as string}
          onClick={() => handleLinkClick()}
          className="font-bold capitalize text-xl"
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
