import React from 'react';

import styled from 'styled-components';

const Section = styled.div`
  background-image: url(${props => props.partybgImage});
  background-size: cover;
  background-repeat: no-repeat;
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
  .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

class PartiesHero extends React.Component {
  render() {
    const { title, partybgImage } = this.props;
    return (
      <Section className="section  is-medium" partybgImage={partybgImage}>
        <div className="image-wrapper">
          <figure className="image is-128x128">
            <img src="/images/ball-copy@2x.png" alt="" />
          </figure>
        </div>
        <div className="columns is-centered is-desktop">
          <div className="column is-7">
            <div className="area">
              <figure className="">
                <img src="/images/t2x.png" alt="" />
              </figure>
              <h1 className="title is-1  is-size-4-mobile centered has-text-white">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default PartiesHero;
