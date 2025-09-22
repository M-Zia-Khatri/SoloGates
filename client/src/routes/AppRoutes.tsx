import { AppNavigation } from '../constants/navigationConstants';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import AuthenticatedAppRoot from '../pages/Layout/AuthenticatedAppRoot';
import Home from '../pages/user_pages/Home';
import AboutUs from '../pages/user_pages/AboutUs';
import Portfolio from '@/pages/user_pages/Portfolio';
import Services from '@/pages/user_pages/Services';

const AppRoutes: RouteObject[] = [
  {
    path: AppNavigation.home,
    element: <AuthenticatedAppRoot />,
    children: [
      { index: true, element: <Home /> },
      { path: AppNavigation.about, element: <AboutUs /> },
      { path: AppNavigation.services, element: <Services /> },
      { path: AppNavigation.portfolio, element: <Portfolio /> },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default AppRoutes;
