import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

const Section = styled.div`
  background-color: red;
`;

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Section className="section is-normal">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-10">
              <div>
                <h1 className="title is-1 has-text-centered"> ARCHIVE </h1>
                <Slider {...settings}>
                  <div>
                    <figure className="image is-128x128">
                      <img src="/images/1@2x.png" alt="" />
                    </figure>
                  </div>
                  <div>
                    <figure className="image is-128x128">
                      <img src="/images/1@2x.png" alt="" />
                    </figure>
                  </div>
                  <div>
                    <figure className="image is-128x128">
                      <img src="/images/1@2x.png" alt="" />
                    </figure>
                  </div>
                  <div>
                    <figure className="image is-128x128">
                      <img src="/images/1@2x.png" alt="" />
                    </figure>
                  </div>
                  <div>
                    <figure className="image is-128x128">
                      <img src="/images/1@2x.png" alt="" />
                    </figure>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
