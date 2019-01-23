import React, {Component} from 'react';
import './Tile.css';

class Tile extends Component{

  render(props) {
    return (
      <div className="card m-3 align-middle game-tile" onClick={()=> this.props.setCounted(this.props.id)}>
        <img src={this.props.img} alt="" className="card-img-top"/>
        
      </div>
    );
  }
};

export default Tile;