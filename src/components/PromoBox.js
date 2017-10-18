import React, {Component} from 'react';
import pattern from '../assets/pattern.svg';
import './PromoBox.scss';

class PromosBox extends Component {
  render() {
    return (
      <div className="promo-box">
        <h3 className="promo-box__title">Promo</h3>
        <img src={pattern} alt="promo" className="promo-box__image" />
      </div>
    );
  }
}
export default PromosBox;
