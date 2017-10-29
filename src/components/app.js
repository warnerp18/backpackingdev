import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import HomePage from './home-page';
import Nav from './nav';
import WorkList from './work-list';
import BlogList from './blog-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route path="/work" component={WorkList} />
        <Route path="/blog" component={BlogList} />
      </div>
    );
  }
}
