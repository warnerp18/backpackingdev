import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Hello extends Component {
  render() {
    return (
      <div>
        Phil's world
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
