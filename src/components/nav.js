import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/work">Work</Link>
        <Link to="/blog">Blog</Link>
      </nav>  
    );
  }
}
