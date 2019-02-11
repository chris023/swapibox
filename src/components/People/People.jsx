import React, { Component, Fragment } from 'react';
import { Card, LoadingSplash } from '../';

import './People.scss';

class People extends Component {

  render() {
    const { loading, getAttrForChar, toggleFavorite } = this.props;
    const { people } = this.props.data;

    return (
      <div className='People grid-content'>
        {
          (loading.people || loading.species || loading.planets)
            ? (<LoadingSplash />)
            : 
                people.map((character) => {
                  const {
                    name,
                    homeworldName,
                    homeworldPop,
                    speciesName,
                    speciesLang } = getAttrForChar(character);
            
                  const content = (
                    <Fragment>
                      <p>Homeworld: {homeworldName}</p>
                      <p>Population: {homeworldPop}</p>
                      <p>Species: {speciesName}</p>
                      <p>Language: {speciesLang}</p>
                    </Fragment>
                  )

                  return (
                    <Card
                      type={'people'}
                      name={name}
                      content={content}
                      toggleFavorite={toggleFavorite}
                      key={name}
                    />
                  )
                }
              
            )
        }
      </div>
      
    )
  }
}

export default People;
