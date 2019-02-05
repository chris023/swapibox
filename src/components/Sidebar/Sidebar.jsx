import React, { Component, Fragment } from 'react';

import './Sidebar.scss';

export default class Sidebar extends Component {
  render() {
    return (
      <div className='Sidebar'>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
        <button>Favorites</button>
        <p className='text'></p>
      </div>
    )
  }
}