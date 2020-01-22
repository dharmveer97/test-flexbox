import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  .is-child {
    background-image: url('/images/festivals@2x.png');
    background-size: cover;
  }
`;

const Event = () => {
  return (
    <Section className="section ">
      <div className="container">
        <div className="tile is-ancestor is-mutiline">
          <div className="tile is-parent">
            <article className="tile is-child " />
          </div>
          <div className="tile is-parent">
            <article className="tile is-child " />
          </div>
          <div className="tile is-parent">
            <article className="tile is-child " />
          </div>
          <div className="tile is-parent">
            <article className="tile is-child " />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Event;
