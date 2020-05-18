import React from 'react';

export default class Rating extends React.Component {
  render() {
    return (
      <div>
        <Rating initialRating={2.5} readonly />
      </div>
    );
  }
}
