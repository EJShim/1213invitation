import React, {Component} from 'react';
import Main from './container/Main';
import slide2 from './resource/img/slideshow/2.png';
import slide5 from './resource/img/slideshow/5.jpg';
import slide6 from './resource/img/slideshow/6.jpg';
import slide7 from './resource/img/slideshow/7.jpg';
import slide8 from './resource/img/slideshow/8.jpg';
import slide9 from './resource/img/slideshow/9.jpg';
import slide10 from './resource/img/slideshow/10.jpg';
import slide11 from './resource/img/slideshow/11.jpg';
import slide12 from './resource/img/slideshow/12.jpg';
import slide13 from './resource/img/slideshow/13.jpg';
import slide14 from './resource/img/slideshow/14.jpg';
import slide15 from './resource/img/slideshow/15.jpg';
import slide16 from './resource/img/slideshow/16.jpg';
import slide17 from './resource/img/slideshow/17.jpg';
import slide18 from './resource/img/slideshow/18.jpg';
import './App.scss';


class App extends Component {

  constructor(props){
    super(props);

    this.myIndex = 0;
  }

  componentDidMount(){        
    this.carousel();
    //this.snow();
  }

  // snow(){
      
  //   var COUNT = 300;
  //   var masthead = document.querySelector('.map-text');
  //   var canvas = document.createElement('canvas');
  //   var ctx = canvas.getContext('2d');
  //   var width = masthead.clientWidth;
  //   var height = masthead.clientHeight;
  //   var i = 0;
  //   var active = false;

  //   function onResize() {

  //     width = masthead.clientWidth;
  //     height = masthead.clientHeight;
  //     canvas.width = width;
  //     canvas.height = height;
  //     ctx.fillStyle = '#FFF';

  //     var wasActive = active;
  //     active = width > 600;

  //     if (!wasActive && active)
  //       window.requestAnimFrame(update);
  //   }

  //   var Snowflake = function () {
  //     this.x = 0;
  //     this.y = 0;
  //     this.vy = 0;
  //     this.vx = 0;
  //     this.r = 0;

  //     this.reset();
  //   }

  //   Snowflake.prototype.reset = function() {
  //     this.x = Math.random() * width;
  //     this.y = Math.random() * -height;
  //     this.vy = 1 + Math.random() * 3;
  //     this.vx = 0.5 - Math.random();
  //     this.r = 1 + Math.random() * 2;
  //     this.o = 0.5 + Math.random() * 0.5;
  //   }

  //   canvas.style.position = 'absolute';
  //   canvas.style.left = 0;

  //   var snowflakes = [], snowflake;
  //   for (i = 0; i < COUNT; i++) {
  //     snowflake = new Snowflake();
  //     snowflake.reset();
  //     snowflakes.push(snowflake);
  //   }

  //   function update() {
  //     ctx.clearRect(0, 0, width, height);

  //     if (!active)
  //       return;

  //     for (i = 0; i < COUNT; i++) {
  //       snowflake = snowflakes[i];
  //       snowflake.y += snowflake.vy;
  //       snowflake.x += snowflake.vx;

  //       ctx.globalAlpha = snowflake.o;
  //       ctx.beginPath();
  //       ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
  //       ctx.closePath();
  //       ctx.fill();

  //       if (snowflake.y > height) {
  //         snowflake.reset();
  //       }
  //     }

  //     window.requestAnimFrame(update);
  //   }

  //   // shim layer with setTimeout fallback
  //   window.requestAnimFrame = (function(){
  //     return  window.requestAnimationFrame       || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame    ||
  //             function( callback ){
  //               window.setTimeout(callback, 1000 / 60);
  //             };
  //   })();

  //   onResize();
  //   window.addEventListener('resize', onResize, false);

  //   masthead.appendChild(canvas);
  // }

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

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

  


  render(){

    const slides = [slide2, slide5,slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13,slide14,slide15,slide16,slide17,slide18];
    this.shuffle(slides);

    const slideElement = slides.map((image, idx)=>{
      return ( <img key={idx} className="mySlides w3-animate-fading" src={image} />)
    });
    return (
      <div ref="container" className="container">
        <section className="main">
          <Main/>
        </section>               

        <section className="map-container">          
          <div className="map-text">
            <p className="shadow"> ◇ 일시 : 17:00, 1th Dec, 2019</p>
            <p className="shadow"> ◇ 장소 : 회기역 소울숲</p>
            <h1 className="shadow"> 테마 : Movie Star </h1>
            <h1 className="shadow"> 베스트 드레서 시상 </h1>
            <p className="shadow"> ◇ 게임 및 경품 추첨, 소정의 상품 지급</p>
            <p className="shadow"> ◇ 각자 마실 거 가져오기</p>
            <p className="shadow"> ◇ 참가비 : 35,000 원</p>
            <p className="shadow"> 우리은행 1002-048-671946 (박승빈)</p>
          </div>
          <div className="map-content">
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.1957656052987!2d127.05614041254037!3d37.58824303692843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbb6c7c8d3245%3A0x6d91e4dd74c9688d!2z7IaM7Jq47Iiy!5e0!3m2!1sko!2sgm!4v1573040435588!5m2!1sko!2sgm" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""/>
          </div>          
        </section>

        <section className="carousel">
          <div className="w3-content w3-section" style={{maxWidth:"90%"}}>
            {slideElement}
          </div>
        </section>

        
      </div>
      
    );
  }
}

export default App;
