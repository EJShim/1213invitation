import React, {Component} from 'react';
import Main from './container/Main';
import slide1 from './resource/img/slideshow/1.jpg'
import slide2 from './resource/img/slideshow/2.png'
import slide3 from './resource/img/slideshow/3.jpg'
import slide4 from './resource/img/slideshow/4.png'
import './App.css';


class App extends Component {

  constructor(props){
    super(props);

    this.myIndex = 0;
  }

  componentDidMount(){        
    this.carousel();
  }

  carousel() {
    let i;
    const x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    this.myIndex++;    
    if (this.myIndex > x.length) {this.myIndex = 1}    
    x[this.myIndex-1].style.display = "block";  
    setTimeout(()=>{this.carousel()}, 9000);    
  }

  


  render(){

    return (
      <div ref="container" className="container">
        <section className="main">
          <Main/>
        </section>        
        <section className="starwars">
          <div className="fade"/>
          <div className="crawl">
            <div className="title">
              <p>KIST Homecoming</p>
              <h1>Friday the 13th, December</h1>
            </div>

            <p className="starwarseContent">Date : 2019.12.13</p>
            <p className="starwarseContent">Time : 7:00 p.m - 5:00 a.m.</p>
            <p className="starwarseContent">Where : SOUL SOUP</p>
            <p className="starwarseContent">Dress Code : Movie Star</p>
            <p className="starwarseContent">Entrance fee : 35,000 won</p>
            <p className="starwarseContent">*각자 마실 음료 가져오기</p>

          </div>
        </section>

        <section className="map-container">
          
          <div className="map-text">
              <p>장소 안내 영상</p>
          </div>
          <div className="map-content">
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.1957656052987!2d127.05614041254037!3d37.58824303692843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbb6c7c8d3245%3A0x6d91e4dd74c9688d!2z7IaM7Jq47Iiy!5e0!3m2!1sko!2sgm!4v1573040435588!5m2!1sko!2sgm" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""/>
          </div>          
        </section>

        
        <section className="slideshow">
          <div className="w3-content w3-section" style={{maxWidth:"100%"}}>
            <p>The w3-animate-fading class animates an element in and out (takes about 10 seconds).</p>
            <img className="mySlides w3-animate-fading" src={slide1} />
            <img className="mySlides w3-animate-fading" src={slide2} />
            <img className="mySlides w3-animate-fading" src={slide3} />
            <img className="mySlides w3-animate-fading" src={slide4} />      
          </div>
        </section>
      </div>
      
    );
  }
}

export default App;
