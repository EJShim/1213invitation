import React, {Component} from 'react';
import Main from './container/Main';
import './App.css';


class App extends Component {


  componentDidMount(){        
    
  }

  


  render(){

    return (
      <div ref="container" className="container">
        <div className="content">
          <Main/>
        </div>
        <div className="content">         
    
        <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.1957656052987!2d127.05614041254037!3d37.58824303692843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbb6c7c8d3245%3A0x6d91e4dd74c9688d!2z7IaM7Jq47Iiy!5e0!3m2!1sko!2sgm!4v1573040435588!5m2!1sko!2sgm" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
        </div>        
      </div>
      
    );
  }
}

export default App;
