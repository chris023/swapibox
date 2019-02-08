import React, { Component, Fragment } from 'react';
import { Card } from '../';

import './Planets.scss';

class Planets extends Component {

  getAttrForPlanet = (planet) => {
    const { getAttribute } = this.props;
    let { name, terrain, population, climate, residents } = planet;

    if (residents.length) {
      residents = residents.map(resident => {
        try { return getAttribute(resident).name }
        catch { return 'n/a' }
      })
      residents = residents.filter(name => name !== 'n/a')
      residents = residents.join(', ');
    } 
    
    if(!residents.length) residents = 'none';

    return {
      name,
      terrain,
      population,
      climate,
      residents,
    }
  }

  render() {
    const { planets } = this.props.data;

    return (
      <div className='Planets grid-content'>
        {planets.map((planet) => {
          const {
            name,
            terrain,
            population,
            climate,
            residents } = this.getAttrForPlanet(planet);

          const content = (
            <Fragment>
              <p>Terrain: {terrain}</p>
              <p>Population: {population}</p>
              <p>Climate: {climate}</p>
              <p>Residents: {residents}</p>
            </Fragment>
          )

          return (
            <Card
              type={'planet'}
              name={name}
              content={content}
              key={name}
            />
          )
        })
        }
      </div>
    )
  }
}

export default Planets;