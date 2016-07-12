import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';

// Pages
import Home from './components/views/home';
import Page1 from './components/views/page-1';
import Page2 from './components/views/page-2';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="page-1" component={Page1} />
      <Route path="page-2" component={Page2} />
    </Route>
  </Router>
);
