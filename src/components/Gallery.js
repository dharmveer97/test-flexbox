import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

class Gallery extends React.Component {
  render() {
    const {} = this.props;
    return (
      <Section className="">
        <div className="columns is-variable is-1 is-multiline">
          <div className="column is-4">
            <figure className="image image is-1by1">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image image is-1by1">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image image is-1by1">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              />
            </figure>
          </div>
          <div className="column is-4">
            <figure className="image image is-1by1">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt=""
              />
            </figure>
          </div>
        </div>
      </Section>
    );
  }
}

export default Gallery;
