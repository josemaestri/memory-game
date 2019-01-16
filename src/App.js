import React, {Component} from 'react';
import './App.css';
import data from './data/data.js';


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

class TopSection extends Component{
  render() {
    return (
      <div className="top-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Memory Game!</h1>
              <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

class Gameboard extends Component{
  render() {
    return (
      <div className="gameboard">
        <div className="container">
          <div className="row justify-content-around flex-wrap">
            {data.map((tile)=>
              <Tile id={tile.id} name={tile.name} />
            )}
          </div>
        </div>
      </div>
    );
  }
};

class Tile extends Component{
  render() {
    return (
      <div className="card m-3 game-tile">
        <img src="https://placehold.it/200/200" alt="" className="card-img-top"/>
        <div className="card-body">
          <div className="h5 card-title">{this.props.id} - {this.props.name}</div>
        </div>
      </div>
    );
  }
};

class Footer extends Component{
  render (){
    return (
      <div className="footer text-left">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>Github</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class App extends Component{
  state = {
    score: 0,
    topScore: 0
  };

  // functions
  incrementScore = () => {
    this.setState({score: this.state.score + 1});
  };
  
  resetGame = () => {
    this.setState({score: 0});
  };



  render() {
    return (
      <div className="app text-center mt-5">
        <Header current={this.state.score} top={this.state.topScore} />
        <TopSection />
        <Gameboard />
        <Footer />
      </div>
    );  
  } 
}

export default App;
