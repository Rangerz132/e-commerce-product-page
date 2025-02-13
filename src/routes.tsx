import { createBrowserRouter, RouteObject } from "react-router";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Collections from "./pages/Collections";

const routeDefinitions = {
  home: { name: "home", path: "/", element: <Home /> },
  men: { name: "men", path: "/men", element: <Men /> },
  women: { name: "women", path: "/women", element: <Women /> },
  about: { name: "about", path: "/about", element: <About /> },
  collections: {
    name: "collections",
    path: "/collections",
    element: <Collections />,
  },
};

export const routes: RouteObject[] = Object.values(routeDefinitions);
export const routeMap = new Map(Object.entries(routeDefinitions));
export const router = createBrowserRouter(routes);
