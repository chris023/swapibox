import React, { Component } from 'react';

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
  }

  render() {
    const menuOptions = ['Home', 'People', 'Planets', 'Vehicles', 'Favorites'];

    return (
      <div className='Sidebar'>
        { menuOptions.map((option) => (
            <button onClick={this.handleClick}>{option}</button>
        ))}
        <p className='text'></p>
      </div>
    )
  }
}