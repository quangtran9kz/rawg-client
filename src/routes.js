import { lazy } from 'react';
import { PublicLayout } from './layouts';

const Games = lazy(() => import('./pages/Games'));
const NotFound = lazy(() => import('./pages/NotFound'));

export const routes = [
  {
    path: '/',
    exact: true,
    layout: PublicLayout,
    component: Games
  },
  {
    path: '/games/:genre',
    exact: true,
    layout: PublicLayout,
    component: Games
  },
  {
    path: '*',
    layout: PublicLayout,
    component: NotFound
  }
];