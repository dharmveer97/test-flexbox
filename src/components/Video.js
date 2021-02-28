import React from 'react';

const MyVideo = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="card">
          <video controls width="250">
            <source
              src="https://radio.sikhnet.com/accounts/channel9/live"
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
};
export default MyVideo;
