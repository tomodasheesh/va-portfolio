import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';

import type { RouteObject } from 'react-router-dom';

export const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
];