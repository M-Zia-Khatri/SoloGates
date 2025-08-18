import { AppNavigation } from "@/constants/navigationConstants";
import Home from "@/pages/user_pages/Home";
import AuthenticatedAppRoot from "@/pages/Layout/AuthenticatedAppRoot";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import AboutUs from "@/pages/user_pages/AboutUs";

const AppRoutes: RouteObject[] = [
  {
    path: AppNavigation.home,
    element: <AuthenticatedAppRoot />,
    children: [
      { index: true, element: <Home /> },
      { path: AppNavigation.about, element: <AboutUs /> },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default AppRoutes;
