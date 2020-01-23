import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-image: url('');
  background-size: cover;
`;

const Event = () => {
  return (
    <Section className="section">
      <div className="container">
        <div className="columns is-multiline is-variable is-5">
          <div className="column">
            <figure className="image">
              <img src="/images/festivals@2x.png" alt="" />
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/festivals@2x.png" alt="" />
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/festivals@2x.png" alt="" />
            </figure>
          </div>
          <div className="column">
            <figure className="image">
              <img src="/images/festivals@2x.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Event;
