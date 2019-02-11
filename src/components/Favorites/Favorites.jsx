import React, { Component } from 'react';
import { Card, LoadingSplash } from '../';

import './Favorites.scss';

class Favorites extends Component {
  
  render() {
    const { loading, favorites, toggleFavorite } = this.props;

    return (
      <div className='Favorites grid-content'>
        {
          (loading.people || loading.species || loading.planets)
            ? (<LoadingSplash />)
            :
          Object.keys(favorites).map(category => 
            Object.keys(favorites[category]).map((name) => {
              return (
                <Card
                  type={category}
                  name={name}
                  content={favorites[category][name]}
                  toggleFavorite={toggleFavorite}
                  key={name}
                />
              )
            })
          )
        }
      </div>

    )
  }
}

export default Favorites;