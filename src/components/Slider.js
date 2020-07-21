import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Section = styled.div``;

const Button = styled.button`
  border-color: transparent;
  background-color: transparent;
  box-shadow: none;
  :hover,
  :focus {
    border-color: transparent;
    background-color: transparent;
    box-shadow: none;
  }
  :focus:not(:active) {
    box-shadow: none;
  }
`;
const data = [
  {
    url:
      'https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg',
  },

  {
    url: 'https://www.w3schools.com/w3css/img_lights.jpg',
  },
];

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      fade: true,
      slidesToScroll: 1,
      variableWidth: false,
      adaptiveHeight: false,
      autoplay: false,
    };
    return (
      <Section>
        <h2>Previous and Next methods</h2>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {data.map(item => (
            <div>
              <img src={item.url} alt="" />
            </div>
          ))}
        </Slider>
        <div>
          <Button type="button" className="button" onClick={this.previous}>
            <span className="icon is-small">
              <i className="fas fa-arrow-left" />
            </span>
          </Button>
          <Button type="button" className="button" onClick={this.next}>
            <span className="icon is-small">
              <i className="fas fa-arrow-right" />
            </span>
          </Button>
        </div>
      </Section>
    );
  }
}
