import React from 'react';
import styled from 'styled-components';
import Sliders from './Slider';

const Section = styled.div``;

const Clients = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <img src="/images/person.jpg" alt="" />
          </div>
          <div className="column">
            <Sliders />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Clients;
