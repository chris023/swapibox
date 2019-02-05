import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Landing />
      </div>
    )
  }
}

export default App;
