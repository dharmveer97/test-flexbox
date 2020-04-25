import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.frameBgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
  .columns {
    justify-content: ${props => (props.flex ? 'flex-end' : 'flex-start')};
  }
  .hero {
    background-image: url('/images/basic/secondFrame.png');
    background-size: 100% 100%;
  }
  p {
    color: ${props => (props.color ? '#fff' : '#2c2c2a')} !important;
  }
`;

const Venue = ({ text, frameBgImage, flex, color }) => (
  <Section
    className="section is-medium"
    frameBgImage={frameBgImage}
    flex={flex}
  >
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-6 hero is-medium">
          <div className="hero-body">
            <p className="title is-4 text has-text-centered has-text-weight-normal">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Venue;
