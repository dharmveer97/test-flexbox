import React from 'react';
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
    transform: scale(1.01);
  }
`;

const GreyScale = () => (
  <Section className="">
    <div className="columns">
      <div className="column is-4">
        <figure className="image is-5by4">
          <img src="/images/home/colored.jpg" alt="" />
        </figure>
      </div>
    </div>
  </Section>
);

export default GreyScale;
