import React, {Component} from 'react';
import Main from './container/Main';
import background from './resource/img/background.jpg';
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
        <section>
          <Main/>
        </section>        
        <section className="starwars">
          <div className="fade"/>
          <div className="crawl">
            <div className="title">
              <p>KIST Homecoming</p>
              <h1>Friday the 13th, December</h1>
            </div>

            <p>드레스코드 무비스타 영화캐릭터	베스트 드레서 선정  소정의상품 (소정이가 준비한 상품)</p>     
            <p>장소	"SOULSOUP 소울숲" (회기역 2번출구 5분거리)	동대문구 휘경동 253-5 2층 (삼육서울병원 맞은편 / 본죽건물)	http://www.soulsoupspace.com</p>
            <p>시간	2019/ 12/ 13/ 금 7pm ~ 5am 참가비	35000원 + 각자 마실 술(음료)…</p>

          </div>
        </section>
        <section>
          <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.1957656052987!2d127.05614041254037!3d37.58824303692843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbb6c7c8d3245%3A0x6d91e4dd74c9688d!2z7IaM7Jq47Iiy!5e0!3m2!1sko!2sgm!4v1573040435588!5m2!1sko!2sgm" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
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
