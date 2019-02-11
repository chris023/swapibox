import React, { Component, Fragment } from 'react';
import { Card, LoadingSplash } from '../';

import './People.scss';

class People extends Component {

  getAttrForChar = (character) => {
    const { getAttribute } = this.props;
    let { name, homeworld, species } = character;

    if (homeworld)  homeworld = getAttribute(homeworld);
    
    if (species) species = getAttribute(species[0]);

    if (!homeworld) homeworld = { name: 'Unknown', population: 'Unknown' }
    if (!species) species = { name: 'Unknown', language: 'Unknown' }
    
    return {
      name,
      homeworldName: homeworld.name,
      homeworldPop: homeworld.population,
      speciesName: species.name,
      speciesLang: species.language,
    }
  }

  render() {
    const { loading } = this.props;
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
                    speciesLang } = this.getAttrForChar(character);
            
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
