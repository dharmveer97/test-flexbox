import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.frameBgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
  .hero.is-medium .hero-body {
    padding-bottom: 6rem;
    padding-top: 6rem;
    padding-right: 4rem;
    padding-left: 4rem;
  }
`;

const Venue = ({ text, frameBgImage, flex, color }) => (
  <Section
    className="section is-medium"
    frameBgImage={frameBgImage}
    flex={flex}
    color={color}
  >
    <div className="container">
      <div className="columns is-vcentered">
        <div className="column is-6 hero is-medium">
          <div className="hero-body">
            <p className="title is-4 is-size-6-mobile text has-text-centered has-text-weight-normal">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Venue;
