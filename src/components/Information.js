import React from 'react';
import styled from 'styled-components';

const Section = styled.div``;

const Information = () => (
  <Section className="section ">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child ">
            <p className="title">One</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <div className="tile is-child ">
            <p className="title">Two</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child ">
            <figure className="image is-square">
              <img src="/images/photo@2x.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Information;
