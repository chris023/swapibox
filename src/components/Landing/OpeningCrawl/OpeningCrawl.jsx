import React, { Component, Fragment } from 'react';

class OpeningCrawl extends Component {
  render() {
    const { title, release_date, episode, opening_crawl } = this.props;
    return (
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
}

export default OpeningCrawl;