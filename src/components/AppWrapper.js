import React, {Component} from 'react';

class AppWrapper extends Component {
  render(props){
    return (
      <div className="app text-center mt-5">
        {this.props.children}
      </div>
    )
  }
};

export default AppWrapper;