import React, {Component} from 'react';
import PromoBox from '../components/PromoBox';

class Promos extends Component {
  render() {
    return (
      <div className="promos page-content">
        <PromoBox/>
        <PromoBox/>
        <PromoBox/>
      </div>
    );
  }
}
export default Promos;
