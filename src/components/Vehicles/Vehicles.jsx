import React, { Component, Fragment } from 'react';
import { Card } from '../';

import './Vehicles.scss';

class Vehicles extends Component {
  getAttrForVehicle = (vehicle) => {
    const { getAttribute } = this.props;
    let { name, terrain, population, climate, residents } = vehicle;

    if (residents.length) {
      residents = residents.map(resident => {
        try { return getAttribute(resident).name }
        catch { return 'n/a' }
      })
      residents = residents.filter(name => name !== 'n/a')
      residents = residents.join(', ');
    }

    if (!residents.length) residents = 'none';

    return {
      name,
      terrain,
      population,
      climate,
      residents,
    }
  }

  render() {
    const { vehicles } = this.props.data;

    return (
      <div className='Vehicles grid-content'>
        {vehicles.map((vehicle) => {
          const {
            name,
            model,
            vehicle_class,
            passengers
          } = vehicle;

          const content = (
            <Fragment>
              <p>Model: {model}</p>
              <p>Class: {vehicle_class}</p>
              <p>Passengers: {passengers}</p>
            </Fragment>
          )

          return (
            <Card
              type={'vehicle'}
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

export default Vehicles;