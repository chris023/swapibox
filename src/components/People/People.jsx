import React, { Component } from 'react';

import './People.scss';

class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people/')
      .then((response) => (response.json()))
      .then(({ results }) => {
        this.setState({
          characters: results,
        });
      })
  }

  render() {
    const { characters } = this.state;

    return (
      <div className='People'>
        {characters.map(character => (
          <div>
            <p>{character.name}</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        ))}
      </div>
      
    )
  }
}

export default People;