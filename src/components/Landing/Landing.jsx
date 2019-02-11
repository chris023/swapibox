import React, { Component } from 'react';
import { LoadingSplash } from '../';
import refreshIcon from '../../assets/refresh.png';
import { OpeningCrawl } from './';

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
            ? (<LoadingSplash />)
            : (
              <OpeningCrawl
                opening_crawl={opening_crawl}
                title={title}
                release_date={release_date}
                episode={episode}
                key={episode}
              />
            ) 
        }
      </div>
    )
  }
}