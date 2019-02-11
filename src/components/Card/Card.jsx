import React, { Component } from 'react';

import './Card.scss';
import {
  alderaan,
  atat,
  atst,
  beru,
  bespin,
  bigg,
  c3p0,
  cloudcar,
  coruscant,
  dagobah,
  endor,
  geonosis,
  hoth,
  kamino,
  leia,
  luke,
  naboo,
  obiwan,
  owen,
  r2d2,
  r5d4,
  sailbarge,
  sandcrawler,
  snowspeeder,
  t16skyhopper,
  tiebomber,
  tiefighter,
  vader,
  x34landspeeder,
  yavin4,
} from '../../assets/card-images';

class Card extends Component {

  state = { fav: false}

  getImage = (name) => {
    const images = {
      "Alderaan": alderaan,
      "AT-AT": atat,
      "AT-ST": atst,
      "Bespin": bespin,
      "C-3PO": c3p0,
      "Coruscant": coruscant,
      "Dagobah": dagobah,
      "Darth Vader": vader,
      "Endor": endor,
      "Luke Skywalker": luke,
      "R2-D2": r2d2,
      "Leia Organa": leia,
      "Owen Lars": owen,
      "Beru Whitesun lars": beru,
      "R5-D4": r5d4,
      "Biggs Darklighter": bigg,
      "Obi-Wan Kenobi": obiwan,
      "Geonosis": geonosis,
      "Hoth": hoth,
      'Kamino': kamino,
      "Naboo": naboo,
      "Sail barge": sailbarge,
      "Sand Crawler": sandcrawler,
      "Snowspeeder": snowspeeder,
      "Storm IV Twin-Pod cloud car": cloudcar,
      "T-16 skyhopper": t16skyhopper,
      "TIE bomber": tiebomber,
      "TIE/LN starfighter": tiefighter,
      "X-34 landspeeder": x34landspeeder,
      "Yavin IV": yavin4
    }

    return images[name] || alderaan;
  }

  handleClick = (name, content, type) => {
    const { toggleFavorite } = this.props;

    toggleFavorite(name, content, type);
    this.setState((prev) => ({ fav: !prev.fav }))
  }

  render() {
    const { type, content, name } = this.props
    const { fav } = this.state;

    return (
      <div className='Card'>
        <div className={"header " + type}>
          <p>{name}</p>
          <div className={fav ? 'fav is-fav' : 'fav'} onClick={() => this.handleClick(name, content, type)}>
            <div className={fav ? 'circle is-fav' : 'circle'} onClick={() => this.handleClick(name, content, type)}>
              <div className={fav ? 'star-img is-fav' : 'star-img'} onClick={() => this.handleClick(name, content, type)}/>
            </div>
            <p>Favorited!</p>
          </div>
        </div>
        <img className='card-image' src={this.getImage(name)} alt=""/>
        <div className={"content " + type }>
          { content }
        </div>
      </div>
    )
  }
}

export default Card;