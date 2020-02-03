import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  margin-top: 4rem;
`;

const images = [
  '/images/photo-6@2x.png',
  '/images/photo-6@2x.png',
  '/images/photo-6@2x.png',
  '/images/photo-6@2x.png',
  '/images/photo-6@2x.png',
  '/images/photo-6@2x.png',
];

class Gallery extends React.Component {
  render() {
    return (
      <Section className="">
        <div className="columns is-variable is-3 is-multiline">
          {images.map(items => (
            <div className="column is-4">
              <figure className="image is-5by4">
                <img src={items} alt="gallery" />
              </figure>
            </div>
          ))}
        </div>
      </Section>
    );
  }
}

export default Gallery;
