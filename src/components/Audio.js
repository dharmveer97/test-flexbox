import React from 'react';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="card">
          {/* http://radio2.sikhnet.com:8033/live */}
          <div className="card-content">
            <audio controls>
              <source
                src="http://radio2.sikhnet.com:8033/live"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
