import React, { Component, Fragment } from 'react';
import { Card, LoadingSplash } from '../';

import './Favorites.scss';

class Favorites extends Component {
  
  render() {
    const { loading, favorites, getAttrForChar, toggleFavorite } = this.props;
    const {
      people,
      planets,
      vehicles,
      species,
      starships, } = this.props.data;

    return (
      <div className='Favorites grid-content'>
        {
          (loading.people || loading.species || loading.planets)
            ? (<LoadingSplash />)
            :
          Object.keys(favorites).map(category => {
            Object.keys(favorites[category]).map((name) => {
              return (
                <Card
                  type={category}
                  name={name}
                  content={favorites[category][name]}
                  toggleFavorite={this.toggleFavorite}
                  key={name}
                />
              )
            })
          })
        }
      </div>

    )
  }
}

export default Favorites;