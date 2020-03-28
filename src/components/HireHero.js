import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.partyBgImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0rem 1.5rem 9rem 1.5rem !important;
  .area {
    position: relative;
    text-align: center;
    color: white;
  }
  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  h1 {
    font-size: 3.5rem;
  }
`;

const LeftWrapper = styled.div`
  image {
    position: absolute;
    left: 0;
  }
`;
// const CenteredWrapper = styled.div``;

const RitWrapper = styled.div`
  image {
    position: absolute;
    right: 0;
  }
`;

const HireHero = ({ title, partyBgImage }) => (
  <Section className="section is-medium" partyBgImage={partyBgImage}>
    <div className="columns is-mobile">
      <LeftWrapper className="column">
        <figure className="image is-128x128">
          <img src="/images/ball-copy@2x.png" alt="" />
        </figure>
      </LeftWrapper>
      {/* <CenteredWrapper className="column">
        <figure className="image is-128x128">
          <img src="/images/ball-copy@2x.png" alt="" />
        </figure>
      </CenteredWrapper> */}
      <RitWrapper className="column">
        <figure className="image is-128x128 ">
          <img src="/images/ball-copy@2x.png" alt="" />
        </figure>
      </RitWrapper>
    </div>

    <div className="columns is-centered is-desktop">
      <div className="column is-7">
        <div className="area">
          <figure className="">
            <img src="/images/t2x.png" alt="" />
          </figure>
          <h1 className="title is-size-4-mobile centered has-text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  </Section>
);

export default HireHero;
