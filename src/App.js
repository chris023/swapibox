import React, { Component, Fragment } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <Landing />
      </Fragment>
    )
  }
}

export default App;
