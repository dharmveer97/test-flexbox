import React, { Component } from 'react';
import Slider from 'react-slick';

export default class VariableWidth extends Component {
  render() {
    const settings = {
      className: 'slider variable-width',
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
    };
    return (
      <div>
        <h2>Variable width</h2>
        <Slider {...settings}>
          <div style={{ width: 100 }}>
            <figure className="image is-128x128">
              <img src="/images/1@2x.png" alt="" />
            </figure>
          </div>
          <div style={{ width: 100 }}>
            <figure className="image is-128x128">
              <img src="/images/1@2x.png" alt="" />
            </figure>
          </div>
          <div style={{ width: 100 }}>
            <figure className="image is-128x128">
              <img src="/images/1@2x.png" alt="" />
            </figure>
          </div>
          <div style={{ width: 300 }}>
            <p>300</p>
          </div>
          <div style={{ width: 225 }}>
            <p>225</p>
          </div>
          <div style={{ width: 175 }}>
            <p>175</p>
          </div>
        </Slider>
      </div>
    );
  }
}
