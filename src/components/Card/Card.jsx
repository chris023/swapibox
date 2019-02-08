import React, { Component } from 'react';

import './Card.scss';

class Card extends Component {
  render() {
    const { type, content, name } = this.props

    return (
      <div className='Card'>
        <div className={"header " + type}>
          <p>{name}</p>
          <div className="fav">
            <div className="circle">
              <div className="img" />
            </div>
            <p>Favorited!</p>
          </div>
        </div>
        <div className="card-img" />
        <div className={"content " + type }>
          { content }
        </div>
      </div>
    )
  }
}

export default Card;