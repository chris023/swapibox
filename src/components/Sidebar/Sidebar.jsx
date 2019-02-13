import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { PageLogo } from '../';

import './Sidebar.scss';

export default class Sidebar extends Component {

  render() {
    const menuOptions = ['Home', 'People', 'Planets', 'Vehicles', 'Favorites'];
    
    const { pathname } = this.props.history.location;
    let currentPage = pathname.split('/')[1];
    if (currentPage === '') currentPage = 'home';

    return (
      <div className='Sidebar'>
        <PageLogo />
        {
          menuOptions.map((option) => {
            return(
              <div className='button-container' key={option}>
                <NavLink
                  className='button'
                  exact
                  to={option === 'Home' ? '/' : `/${option.toLowerCase()}`}
                >
                  {option}
                </NavLink>
                <span className={currentPage === option.toLowerCase() ? 'dot' : 'dot hidden'}>{' •'}</span>
                {(option === 'Favorites') && (
                  <div className='fav-indicator'>
                    5
                  </div>
                )}
              </div>
            )
          })
        }
        <div className="help-ico">
          ?
          <div className="modal">
            <p>Created by Chris Meyer (2019)</p>
            <a href='https://github.com/chris023/swapibox' target='_blank' rel="noopener noreferrer"> Github</a>
          </div>
        </div>
      </div>
    )
  }
}