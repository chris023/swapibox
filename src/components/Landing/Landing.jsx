import React, { Component, Fragment } from 'react';
import { LoadingSplash } from '../';
import refreshIcon from '../../assets/refresh.png';

import './Landing.scss';

export default class Landing extends Component {

  render() {
    const { loading, data } = this.props;
    const { films } = data;

    const randIndex = Math.round(Math.random() * (films.length - 1));
    const {
        opening_crawl,
        title,
        release_date,
      } = films[randIndex];

    return (
      <div className='Landing'>
        <img src={refreshIcon} alt="" className='refresh-ico'/>
        {
          loading.films
            ? ( <LoadingSplash /> )
            : (
              <Fragment>
                <div className='opening-crawl'>
                  <div className="title">
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