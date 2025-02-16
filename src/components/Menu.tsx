import { MenuContext, useMenuContext } from "../contexts/MenuContext";
import { routeMap } from "../routes";
import { Link } from "react-router";

const Menu = () => {
  const { setMenu } = useMenuContext(MenuContext);

  return (
    <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {Array.from(routeMap.entries()).map(([key, route]) => (
        <Link
          key={key}
          to={route.path as string}
          onClick={() => setMenu(false)}
          className="font-bold capitalize text-xl md:font-normal md:text-base md:text-neutral-dark-grayish-blue border-b-0 md:py-6 transition-all duration-300 md:border-b-4 md:border-b-transparent hover:md:border-b-primary-orange"
        >
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
