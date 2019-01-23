import React, {Component} from 'react';

class TopSection extends Component{
  render() {
    return (
      <div className="top-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>It's the Animani-Game!</h1>
              <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default TopSection;