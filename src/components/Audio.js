import React from 'react';

function App() {
  return (
    <div className="section">
      <div className="container">
        <div className="card">
          {/* http://radio2.sikhnet.com:8033/live */}
          <div className="card-content">
            <div>
              <iframe
                src="http://radio2.sikhnet.com:8033/live"
                allow="autoplay"
                width="1208"
                height="500"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
