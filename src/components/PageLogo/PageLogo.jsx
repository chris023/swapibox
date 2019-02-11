import React, { Component } from 'react';

import './PageLogo.scss';

class PageLogo extends Component {
  render() {
    return(
      <a class="PageLogo" href='https://github.com/chris023/swapibox' target="_blank">
        <h2>SWAPI</h2>
        <br />
        <p>-- Box --</p>
      </a>
    )
  }
}

export default PageLogo;