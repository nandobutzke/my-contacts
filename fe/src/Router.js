import { useRoutes } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import Categories from './pages/Categories';
import NewCategory from './pages/NewCategory';
import EditCategory from './pages/EditCategory';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/contacts/new',
      element: <NewContact />,
    },
    {
      path: '/contacts/edit/:id',
      element: <EditContact />,
    },
    {
      path: '/categories',
      element: <Categories />,
    },
    {
      path: '/categories/new',
      element: <NewCategory />,
    },
    {
      path: '/categories/edit/:id',
      element: <EditCategory />,
    },
  ]);

  return routes;
}
