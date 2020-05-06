import React from 'react';
import styled from 'styled-components';
import InfoContent from './InfoContent';

const Section = styled.div`
  background-color: black;
`;

const Info = () => (
  <Section className="section">
    <div className="columns  is-centered">
      <div className="column is-half">
        <InfoContent />
      </div>
    </div>
    <div className="columns  is-centered">
      <div className="column is-half">
        <InfoContent />
      </div>
    </div>
  </Section>
);

export default Info;
