import React, {Component} from 'react';
import './App.css';
import data from './data/data.js';

import Header from './components/Header';
import TopSection from './components/TopSection';
import Gameboard from './components/Gameboard';
import Tile from './components/Tile';
import Footer from './components/Footer';
import AppWrapper from './components/AppWrapper';


var _ = require('lodash');


class App extends Component{
  state = {
    score: 0,
    topScore: 0,
    data: _.shuffle(data)
  };

  // functions

  handleClick = (id) => {
    this.setCounted(id);

    let item = this.state.data.filter(item => item.id === id);
    let isCounted = item[0].counted;
    
    if (isCounted) {
      this.resetGame();
    } else{
      this.incrementScore();
    }
  };

  setCounted = (id) => {
    const newData = this.state.data.map(item =>{
      if(item.id === id){
        return {id: item.id, img: item.img, name: item.name, counted: true};        
      } else{
        return {id: item.id, img: item.img, name: item.name, counted: item.counted};
      }
    });
    this.setState({data: _.shuffle(newData)});
  };

  incrementScore = () => {
    this.setState({score: this.state.score + 1});
    if(this.state.score >= this.state.topScore){
      this.setState({topScore: this.state.score + 1});
    }
    if(this.state.score >= data.length - 1){
      this.setState({score: this.state.score + 1, topScore: this.state.topScore + 1});
      setTimeout(() => {
        alert('Congratulations! You won! Start again?');
        this.resetGame();
      },500);
    }
  };
  
  resetGame = () => {
    this.setState({score: 0,data: _.shuffle(data)});
  };


  render() {
    return (
      <AppWrapper>
        <Header current={this.state.score} top={this.state.topScore} />
        <TopSection />
        <Gameboard data={this.state.data}>
          {this.state.data.map((tile)=>
            <Tile key={tile.id} id={tile.id} name={tile.name} img={tile.img} setCounted={this.handleClick} />
          )}
        </Gameboard>
        <Footer />
      </AppWrapper>
    );  
  } 
}

export default App;
