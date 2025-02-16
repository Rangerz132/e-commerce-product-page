import { createBrowserRouter, RouteObject } from "react-router";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Collections from "./pages/Collections";
import Layout from "./pages/Layout";

const routeDefinitions = {
  root: {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home />, name: "Home" },
      { path: "men", element: <Men />, name: "Men" },
      { path: "women", element: <Women />, name: "Women" },
      { path: "about", element: <About />, name: "About" },
      { path: "collections", element: <Collections />, name: "Collections" },
    ],
  },
};

export const routes: RouteObject[] = [routeDefinitions.root];
export const router = createBrowserRouter(routes);

export const menuRoutes = routeDefinitions.root.children.map((route) => ({
  name: route.name as string,
  path: `/${route.path}`,
}));
