import React from 'react';

import styled from 'styled-components';
import config from '../utils/config';

const Card = styled.div`
  justify-content: center;
  display: flex;
  video {
    height: 171px !important;
    position: relative !important;
    top: -58px !important;
  }
`;

const MyVideo = () => {
  return (
    <div className="section hero is-info">
      <div className="container">
        <Card className="card">
          <video controls>
            <source src={config.audio} type="video/webm" />
          </video>
        </Card>
      </div>
    </div>
  );
};
export default MyVideo;
