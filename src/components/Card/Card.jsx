import React, { Component } from 'react';

import './Card.scss';
import { luke } from '../../assets/card-images';

class Card extends Component {

  getImage = (name) => {
    const images = {
      "Luke Skywalker": "../../assets/card-images/luke.png",
      "C-3PO": "../../assets/card-images/c3p0.png",
      "R2-D2": "../../assets/card-images/r2d2.png",
      "Darth Vader": "../../assets/card-images/darthvader.png",
      "Leia Organa": "../../assets/card-images/leia.png",
      "Owen Lars": "../../assets/card-images/owen.png",
      "Beru Whitesun lars": "../../assets/card-images/beru.png",
      "R5-D4": "../../assets/card-images/r5d4.png",
      "Biggs Darklighter": "../../assets/card-images/bigg.png",
      "Obi-Wan Kenobi": "../../assets/card-images/obiwan.png",
      "Alderaan": "../../assets/card-images/alderaan.png",
      "AT-AT": "../../assets/card-images/atat.png",
      "AT-ST": "../../assets/card-images/atst.png",
      "Bespin": "../../assets/card-images/bespin.png",
      "Coruscant": "../../assets/card-images/coruscant.png",
      "Dagobah": "../../assets/card-images/dagobah.png",
      "Endor": "../../assets/card-images/endor.png",
      "Geonosis": "../../assets/card-images/geonosis.png",
      "Hoth": "../../assets/card-images/hoth.png",
      'Kamino': "../../assets/card-images/kamino.png",
      "Naboo": "naboo.png",
      "Sail barge": "../../assets/card-images/sailbarge.png",
      "Sand Crawler": "../../assets/card-images/sandcrawler.png",
      "Snowspeeder": "../../assets/card-images/snowspeeder.png",
      "Storm IV Twin-Pod cloud car": '../../assets/card-images/cloudcar.png',
      "T-16 skyhopper": "../../assets/card-images/t16skyhopper.png",
      "TIE bomber": "../../assets/card-images/tiebomber.png",
      "TIE/LN starfighter": "../../assets/card-images/tiefighter.png",
      "X-34 landspeeder": "../../assets/card-images/x34landspeeder.png",
      "Yavin IV": "../../assets/card-images/yavin4.png"
    }

    return images[name];
  }

  render() {
    const { type, content, name, toggleFavorite } = this.props

    return (
      <div className='Card'>
        <div className={"header " + type}>
          <p>{name}</p>
          <div className="fav" onClick={() => toggleFavorite(name, content, type)}>
            <div className="circle" onClick={() => toggleFavorite(name, content, type)}>
              <div className="star-img" onClick={() => toggleFavorite(name, content, type)}/>
            </div>
            <p>Favorited!</p>
          </div>
        </div>
        <img className='card-image' src={luke} alt=""/>
        <div className={"content " + type }>
          { content }
        </div>
      </div>
    )
  }
}

export default Card;