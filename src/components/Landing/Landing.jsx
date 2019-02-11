import React, { Component, Fragment } from 'react';
import { LoadingSplash } from '../';
import refreshIcon from '../../assets/refresh.png';

import './Landing.scss';

export default class Landing extends Component {

  state = {
    randFilm: {},
    episode: 0
  }

  handleRefresh = () => {
    this.getRandomFilm();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.loading.films) return false;
    return true;
  }

  getRandomFilm = () => {
    const { data } = this.props;
    const { films } = data;
    
    const randIndex = Math.round(Math.random() * (films.length - 1));
    this.setState({ randFilm: films[randIndex], episode: randIndex + 1 });
  }

  render() {
    const { loading } = this.props;
    const { randFilm, episode } = this.state;

    if (!loading.films && !Object.keys(randFilm).length) this.getRandomFilm();
    
    const {
      opening_crawl,
      title,
      release_date,
    } = randFilm;

    return (
      <div className='Landing'>
        <img src={refreshIcon} alt="" className='refresh-ico' onClick={this.handleRefresh}/>
        {
          (loading.films || !Object.keys(randFilm).length)
            ? ( <LoadingSplash /> )
            : (
              <Fragment>
                <div className='opening-crawl'>
                  <div className="title">
                    <h2>{title + ' (' + release_date.split('-')[0] + ')'}</h2>
                    <p>Episode {episode}</p>
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