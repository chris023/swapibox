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
    fetch('https://swapi.co/api/films/1/')
      .then((response) => response.json())
      .then(({ opening_crawl }) =>
        this.setState({
          openingCrawl: opening_crawl
        })
      )
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