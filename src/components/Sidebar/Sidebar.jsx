import React, { Component, Fragment } from 'react';

import './Sidebar.scss';

export default class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'Home'
    }
  }

  handleClick = (e) => {
    const { setCurrentPage } = this.props;
    setCurrentPage(e.target.innerText);
    this.setState({
      currentPage: e.target.innerText,
    })
  }

  render() {
    const menuOptions = ['Home', 'People', 'Planets', 'Vehicles', 'Favorites'];
    const { currentPage } = this.state;

    return (
      <div className='Sidebar'>
        {
          menuOptions.map((option) => (
            <div className='button-container'>
              <button
                className={currentPage === option ? 'selected' : ''}
                onClick={this.handleClick}
                key={option}>
                {option}
              </button>
              <span className={currentPage === option ? 'dot' : 'dot hidden'}>{' •'}</span>
            </div>
          ))
        }
      </div>
    )
  }
}