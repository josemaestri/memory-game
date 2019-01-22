import React, {Component} from 'react';

class Tile extends Component{

  render(props) {
    return (
      <div className="card m-3 game-tile" onClick={()=> this.props.setCounted(this.props.id)}>
        <img src={this.props.img} alt="" className="card-img-top"/>
        <div className="card-body">
          <div className="h5 card-title">{this.props.id} - {this.props.name}</div>
        </div>
      </div>
    );
  }
};

export default Tile;