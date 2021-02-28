import React from 'react';
import styled from 'styled-components';

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
    <div className="section">
      <div className="container">
        <Card className="card">
          <video controls>
            <source
              src="https://radio.sikhnet.com/accounts/channel9/live"
              type="video/webm"
            />
          </video>
        </Card>
      </div>
    </div>
  );
};
export default MyVideo;
