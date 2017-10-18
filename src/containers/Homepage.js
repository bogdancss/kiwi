import React, {Component} from 'react';
import Carousel from '../components/Carousel';
import Promos from '../components/Promos';
import Mystery from '../components/Mystery';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <Carousel/>
        <Promos/>
        <Mystery/>
      </div>
    );
  }
}

export default Homepage;
