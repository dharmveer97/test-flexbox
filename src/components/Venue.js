import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url(/images/lack.png);
  background-repeat: no-repeat;
  background-image: url(/images/lack.png);
  background-size: cover;
`;

class Venue extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="hero section is-block is-relative  is-medium">
        <div className="container">
          <div className="columns is-vcentered is-desktop">
            <div className="column is-5-desktop">
              <p>ssss</p>
            </div>
            <div className="column is-1" />
            <div className="column is-5-desktop">
              <figure className="image">
                <img
                  src="https://bulma.io/images/placeholders/128x128.png"
                  alt=""
                />
                >
              </figure>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default Venue;
