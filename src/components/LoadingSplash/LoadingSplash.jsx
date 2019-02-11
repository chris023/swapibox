import React, { Component } from 'react';

import './LoadingSplash.scss';

class LoadingSplash extends Component {
  render() {
    
    const loadingIcons = ['vader', 'wookie', 'r2d2', 'c3po', 'bb8', 'fighter', 'fett', 'trooper', 'wren'];
    const randomIcon = loadingIcons[Math.round(Math.random() * (loadingIcons.length - 1))]

    return (
      <div className='loading-wrapper'>
        <div className={randomIcon} />
        <p className="loading-text">Loading</p>
      </div>
    )
  }
}

export default LoadingSplash;