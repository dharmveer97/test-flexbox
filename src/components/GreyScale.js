import React from 'react';
import ModalImage from 'react-modal-image';
import styled from 'styled-components';
// import ImageModel from './ImageModel';

const Section = styled.div`
  img {
    filter: gray;
    filter: grayscale(1);
    transition: all 0.8s ease-in-out;
  }
  img:hover {
    filter: none;
    filter: grayscale(0);
  }
`;

const GreyScale = ({ src, alt }) => (
  <Section className="">
    <div className="columns">
      <div className="column is-4">
        <ModalImage small={src} large={src} alt={alt} hideDownload />
      </div>
    </div>
  </Section>
);

export default GreyScale;
