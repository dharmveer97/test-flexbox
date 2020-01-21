import React from 'react';
import Slider from 'react-slick';

import Card from './Card';

class ReactSlickDemo extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <Slider {...settings}>
                <div>
                  <Card />
                </div>
                <div>
                  <Card />
                </div>
                <div>
                  <Card />
                </div>
                <div>
                  <Card />
                </div>
                <div>
                  <Card />
                </div>
                <div>
                  <Card />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ReactSlickDemo;
