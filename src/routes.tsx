import { createBrowserRouter, RouteObject } from "react-router";
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import About from "./pages/About";
import Collections from "./pages/Collections";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/men",
    element: <Men />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/women",
    element: <Women />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
];

export const router = createBrowserRouter(routes);
