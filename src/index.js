import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';

import Nav from './components/nav';
import App from './components/app';
import WorkList from './components/work-list';
import BlogList from './components/blog-list';

const customHistory = createBrowserHistory()

render(
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={App} />
      <Route path="/work" component={WorkList} />
      <Route path="/blog" component={BlogList} />
    </div>
  </Router>
, document.getElementById('app'));
