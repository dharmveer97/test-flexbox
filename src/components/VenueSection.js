import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-image: url('/images/home/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .columns.is-centered {
    margin-top: 40rem;
  }
`;

const MovingLeftContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 11rem;
`;
const MovingRightContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 11rem;
`;

const FireworkContainer = styled.div`
  right: 80px;
  .circular-image {
    width: 35%;
  }
  @keyframes rotate360 {
    to {
      transform: rotate(360deg);
    }
  }
  .circular-image {
    animation: 2s rotate360 infinite linear;
  }
`;

const HomeHero = () => {
  return (
    <Section className="section">
      <div className="container">
        <figure className="image">
          <img src="/images/home/title-banner@2x.png" alt="" />
        </figure>
        <FireworkContainer className="circle">
          <img
            className="circular-image"
            id="loading"
            src="/images/home/firework-5@2x.png"
            alt="circle"
          />
        </FireworkContainer>
        <div className="columns  is-centered">
          <div className="column is-10 has-text-centered">
            <h1 className="title is-2 has-text-white has-text-weight-semibold	">
              Get in Touch!
            </h1>
            <h1 className="title is-3 has-text-white has-text-weight-semibold	">
              <span className="has-text-grey-lighter has-text-weight-light ">
                Email:
              </span>
              enquiries@deckerdence.com{' '}
              <span className="has-text-grey-lighter has-text-weight-light">
                OR Call:
              </span>
              01675 463555
            </h1>
          </div>
          <div className="columns">
            <MovingLeftContainer className="column rocket">
              <img
                id="left-moving-item"
                src="/images/home/layer-802@2x.png"
                alt="Left-Rocket"
                width="35%"
                className="rocket"
              />
            </MovingLeftContainer>

            <MovingRightContainer className="column">
              <img
                id="left-moving-item"
                src="/images/home/layer-797@2x.png"
                alt="Left-Rocket"
                width="35%"
                className="rocket"
              />
            </MovingRightContainer>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeHero;
