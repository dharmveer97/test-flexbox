import React from 'react';
import Slider from 'react-slick';

import Card from './Card';

class ReactSlickDemo extends React.Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="section is-medium">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8">
              <Slider {...settings}>
                <div>
                  <Card title="" para="" subtitle="" />
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
