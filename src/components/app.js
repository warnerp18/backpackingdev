import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch
} from 'react-router-dom';
import ReactLoading from 'react-loading';

import HomePage from './home-page';
import Nav from './nav';
import WorkList from './work-list';
import BlogList from './blog-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hover: false,
    }
  }

  componentDidMount() {
    this.setState({
      loading: false,
    });
  }

  handleHoverOn(e) {
    const default = document.querySelector('.default');
    if(e.target !== test || !default.classList.value.includes('active')) {
      default.classList.remove('active')
      e.target.classList.add('active');
    }

    this.setState({ hover: true});
  }

  handleHoverOff(e) {
    e.target.classList.remove('active');
    this.setState({ hover: false});
  }

  render() {
    if(this.state.loading) {
      return <ReactLoading type="bubbles" color="blue" />
    }

    const defaultActive = document.querySelector('.default');
    if(!this.state.hover && defaultActive) {
      defaultActive.classList.add('active'); 
    }

    return (
      <div>
        <Nav />
        <Route path="/work" component={WorkList} />
        <Route path="/blog" component={BlogList} />
        <div className="imgs">
          <span className="img"
            onMouseEnter={e => this.handleHoverOn(e)}
            onMouseLeave={e => this.handleHoverOff(e)}
          >Backpacking</span>
          <span className="img"
            onMouseEnter={e => this.handleHoverOn(e)}
            onMouseLeave={e => this.handleHoverOff(e)}
          >Crossfit</span>
          <span className="img default active"
            onMouseEnter={e => this.handleHoverOn(e)}
            onMouseLeave={e => this.handleHoverOff(e)}
          >Developer</span>
          <span className="img"
            onMouseEnter={e => this.handleHoverOn(e)}
            onMouseLeave={e => this.handleHoverOff(e)}
          >Veteran</span>
          <span className="img"
            onMouseEnter={e => this.handleHoverOn(e)}
            onMouseLeave={e => this.handleHoverOff(e)}
          >Camping</span>
        </div>
      </div>
    );
  }
}

export default App; 
