import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: black;
`;

const InfoContent = () => (
  <Card className="card">
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-96x96">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/96x96.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-5 has-text-white is-spaced">John Smith</p>
          <p className="subtitle is-6 has-text-grey-light">
            Overland Expedition Vehicle, Jeep, Private Bus, Ferry Overland
            Expedition
          </p>
        </div>
      </div>
    </div>
  </Card>
);

export default InfoContent;
