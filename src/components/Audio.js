import React from 'react';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="card">
          {/* http://radio2.sikhnet.com:8033/live */}
          <div className="card-content">
            <figure className="image is-16by9">
              <iframe
                title="live"
                className="has-ratio"
                width="640"
                height="360"
                src="http://radio2.sikhnet.com:8033/live"
                frameBorder="0"
                allowFullScreen
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
