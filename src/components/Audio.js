import React from 'react';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="card">
          {/* http://radio2.sikhnet.com:8033/live */}
          <div className="card-content">
            <video controls autoPlay name="media">
              <source
                src="http://radio2.sikhnet.com:8033/live"
                type="audio/mpeg"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
