import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

export default class Sidebar extends Component {

  render() {
    const menuOptions = ['Home', 'People', 'Planets', 'Vehicles', 'Favorites'];
    
    const { pathname } = this.props.history.location;
    let currentPage = pathname.split('/')[1];
    if (currentPage === '') currentPage = 'home';

    return (
      <div className='Sidebar'>
        {
          menuOptions.map((option) => {
            return(
              <div className='button-container'>
                <NavLink
                  className='button'
                  exact
                  to={option === 'Home' ? '/' : `/${option.toLowerCase()}`}
                  key={option}>
                  {option}
                </NavLink>
                <span className={currentPage === option.toLowerCase() ? 'dot' : 'dot hidden'}>{' •'}</span>
              </div>
            )
          })
        }
      </div>
    )
  }
}