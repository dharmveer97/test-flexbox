import React from 'react';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div>
      <h3>
        Audio player in React -
        <a href="https://www.cluemediator.com">Clue Mediator</a>
      </h3>
      <ReactPlayer
        url="http://radio2.sikhnet.com:8033/live"
        width="400px"
        height="50px"
        playing={false}
        controls
      />
    </div>
  );
}

export default App;
