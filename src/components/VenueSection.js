import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(/images/home/photo@2x.png);
  background-repeat: no-repeat;
  background-size: cover;
  /* .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.6rem;
  } */
`;
const ImageWrapper = styled.div`
  background-image: url(/images/home/box-4@2x.png);
  background-repeat: no-repeat;
  background-size: cover;
`;

class VenueSection extends React.Component {
  render() {
    const { leftAlt, FrameBgImage } = this.props;
    return (
      <Section
        className="hero section is-block is-relative  is-large"
        FrameBgImage={FrameBgImage}
      >
        <div className="container">
          <div className="columns is-centered is-desktop">
            <div className="column is-6">
              <ImageWrapper className="section hero is-medium is-relative">
                <div className="container">
                  <p className="text has-text-centered has-text-black">
                    ddkjsdjsjs
                  </p>
                </div>
              </ImageWrapper>
            </div>
            <div className="column is-6">
              <ImageWrapper className="section hero is-medium is-relative">
                <div className="container">
                  <p className="text has-text-centered has-text-black">
                    ddkjsdjsjs
                  </p>
                </div>
              </ImageWrapper>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default VenueSection;
