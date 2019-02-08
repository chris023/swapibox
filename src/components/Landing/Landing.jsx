import React, { Component, Fragment } from 'react';

import './Landing.scss';

export default class Landing extends Component {

  render() {
    const { loading, data } = this.props;
    const { films } = data;

    const loadingIcons = ['vader', 'wookie', 'r2d2', 'c3po', 'bb8', 'fighter', 'fett', 'trooper', 'wren'];
    const randomIcon = loadingIcons[Math.round(Math.random() * (loadingIcons.length - 1))]

    //Get random film
    const randIndex = Math.round(Math.random() * (films.length - 1));
    const {
      opening_crawl,
      title,
      release_date,
    } = films[randIndex];

    return (
      <div className='Landing'>
        {
          loading
            ? (
              <Fragment>
                <div className={randomIcon} />
                <p className="loading-text">Loading...</p>
              </Fragment>
            )
            : (
              <Fragment>
                <div className='opening-crawl'>
                  <div class="title">
                    <h2>{title + ' (' + release_date.split('-')[0] + ')'}</h2>
                    <p>Episode {randIndex + 1}</p>
                  </div>
                  <p>{opening_crawl}</p>
                </div>
              </Fragment>
            ) 
        }
        
      </div>
    )
  }
}