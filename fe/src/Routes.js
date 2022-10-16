import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NewContact from './pages/NewContact';
import EditContact from './pages/EditContact';
import Categories from './pages/Categories';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contacts/new" component={NewContact} />
      <Route path="/contacts/edit/:id" component={EditContact} />

      <Route path="/categories" component={Categories} />
    </Switch>
  );
}
