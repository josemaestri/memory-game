import React, {Component} from 'react';

class Header extends Component{
  render() {
    return (
      <header className="fixed-top py-3 mb-5 bg-warning shadow-lg">
        <div className="container">
          <div className="row">
            <div className="col">
              <a className="h2" href="/"><strong>The Animani-Game</strong></a>
            </div>
            <div className="col">
              <h2 className={this.props.color}>{this.props.text}</h2>
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