import React from 'react';

import styled from 'styled-components';

const Section = styled.div``;

const Header = () => (
  <Section className="section">
    <div className="container">
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child box">
            <p className="title">Three</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              semper diam at erat pulvinar, at pulvinar felis blandit.
              Vestibulum volutpat tellus diam, consequat gravida libero rhoncus
              ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta
              orci, quis semper odio felis ut quam.
            </p>
            <p>
              Suspendisse varius ligula in molestie lacinia. Maecenas varius
              eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
            </p>
          </div>
        </div>
        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box">
            <p className="title">One</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <div className="tile is-child box">
            <p className="title">Two</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default Header;
