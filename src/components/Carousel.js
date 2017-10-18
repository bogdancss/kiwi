import React, {Component} from 'react';
import Slider from 'react-slick';
import './Carousel.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      center: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="carousel page-content">
        <Slider {...settings}>
          <div className="carousel__item"><span>Slide 1</span></div>
          <div className="carousel__item"><span>Slide 2</span></div>
          <div className="carousel__item"><span>Slide 3</span></div>
          <div className="carousel__item"><span>Slide 4</span></div>
        </Slider>
      </div>
    );
  }
}
export default Carousel;
