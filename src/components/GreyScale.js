import React from 'react';
import ModalImage from 'react-modal-image';
import styled from 'styled-components';

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
  .__react_modal_image__medium_img {
    max-width: 98%;
    max-height: 98%;
  }
  .modal_small_image {
    width: 100% !important;
    height: 370px !important;
  }
`;

const GreyScale = ({ src, alt }) => (
  <Section className="">
    <div className="columns">
      <div className="column is-4">
        <ModalImage
          large={src}
          alt={alt}
          hideDownload
          small={src}
          className="modal_small_image"
        />
      </div>
      <div className="column is-4">
        <ModalImage
          large={src}
          alt={alt}
          hideDownload
          small={src}
          className="modal_small_image"
        />
      </div>
      <div className="column is-4">
        <ModalImage
          large={src}
          alt={alt}
          hideDownload
          small={src}
          className="modal_small_image"
        />
      </div>
    </div>
  </Section>
);

export default GreyScale;
