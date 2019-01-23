import React, {Component} from 'react';
import './Tile.css';

class Tile extends Component{

  render(props) {
    return (
      <div className="card m-3 align-middle game-tile" onClick={()=> this.props.setCounted(this.props.id)} style={{backgroundImage: `url(${this.props.img})`}}>
        
        
      </div>
    );
  }
};

export default Tile;