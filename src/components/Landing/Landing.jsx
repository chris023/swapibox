import React, { Component, Fragment } from 'react';

import './Landing.scss';

export default class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openingCrawl: '',
      title: '',
      releaseYear: '',
      loading: true,
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then((response) => response.json())
      .then(({ results, count }) => {
        const randIndex = Math.round(Math.random() * (count - 1));
        const { opening_crawl, title, release_date } = results[randIndex];
        
        this.setState({
          openingCrawl: opening_crawl,
          title,
          releaseYear: release_date.split('-')[0],
          loading: false,
        })
      })
  }

  render() {
    const {
      openingCrawl,
      title,
      releaseYear,
      loading,
    } = this.state;

    return (
      <div className='Landing'>
        {
          loading
            ? (
              <p>Loading...</p>
            )
            : (
              <Fragment>
                <p className='opening-crawl'>{openingCrawl}</p>
                <div className='movie-info'>
                  <p>{title}</p>
                  <p>({releaseYear})</p>
                </div>
              </Fragment>
            ) 
        }
        
      </div>
    )
  }
}