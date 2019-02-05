import React, { Component } from 'react';

import './Landing.scss';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openingCrawl: '',
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then((response) => response.json())
      .then(({ results, count }) => {
        const randIndex = Math.round(Math.random() * (count - 1));
        const { opening_crawl } = results[randIndex];
        
        this.setState({
          openingCrawl: opening_crawl
        })
      })
  }

  render() {
    const { openingCrawl } = this.state;

    return (
      <div className='Landing'>
        <p>{ openingCrawl }</p>
      </div>
    )
  }
}