import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import Landing from './components/Landing';
import People from './components/People';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: <Landing />,
    }
  }

  setCurrentPage = (currentPageName) => {
    let currentPageComponent = null;
    
    switch (currentPageName) {
      case 'Home':
        currentPageComponent = <Landing />
        break;
      case 'People':
        currentPageComponent = <People />
        break;
      default:
        return;
    }

    
    this.setState({
      currentPage: currentPageComponent
    })
  }

  render() {
    const { currentPage } = this.state;

    return (
      <div className="App">
        <Sidebar setCurrentPage={this.setCurrentPage} />
        {currentPage}
      </div>
    )
  }
}

export default App;
