import React, {Component} from 'react';

class Footer extends Component{
  render (){
    return (
      <div className="footer text-left">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5><a href="//github.com/josemaestri/memory-game" className="text-dark">Github</a></h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;