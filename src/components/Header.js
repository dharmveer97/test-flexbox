import React from 'react';

import styled from 'styled-components';

import SimpleSlider from './SimpleSlider';

const Section = styled.div`
  background-image: url(/images/background@2x.png);
`;

const Header = () => (
  <Section className="section is-large">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-8">
          <SimpleSlider />
        </div>
      </div>
    </div>
  </Section>
);

export default Header;
