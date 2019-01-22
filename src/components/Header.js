import React, {Component} from 'react';

class Header extends Component{
  render() {
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <a className="h2" href="/"><strong>Memory Game</strong></a>
            </div>
            <div className="col">
              <h2>Click an image to begin.</h2>
            </div>
            <div className="col">
              <h2>
                Current: {this.props.current} | Top: {this.props.top}
              </h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;