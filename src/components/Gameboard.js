import React, {Component} from 'react';

class Gameboard extends Component{
  render() {
    return (
      <div className="gameboard">
        <div className="container">
          <div className="row justify-content-around flex-wrap">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
};

export default Gameboard;