import React, {Component} from 'react';
import './App.css';

class App extends Component {


  componentDidMount(){
  }


  render(){
    return (
      <div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          Logo
        </div>

        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
          <hr className="w3-border-grey" style={{margin:"auto",width:40+'%'}}></hr>
          <p class="w3-large w3-center"> 35 days left</p>
        </div>

        <div className="w3-display-bottomleft w3-padding-large">
          Powered by <a href="https://ejshim.github.io">EJShim</a>
        </div>
      </div>
    );
  }
}

export default App;
