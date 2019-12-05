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
    
  }


  


  render(){

    const slides = [slide2, slide5,slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13,slide14,slide15,slide16,slide17,slide18];

    const slideElement = slides.map((image, idx)=>{
      return (<img key={idx} src={image}/>)
    });
    return (
      <div ref="container" className="container">
        <section className="main">
          <Main/>
        </section>               

        <section className="map-container">          
          <div className="map-text">
            <h1 className="shadow">초대장</h1>          
            <p className="shadow"> 일시 : 17:00, 1th Dec, 2019</p>
            <p className="shadow"> 장소 : 회기역 소울숲</p>
            <h1 className="shadow"> 테마 : Movie Star - 베스트 드레서 시상</h1>
            <p className="shadow"> 게임 및 경품 추첨, 소정의 상품 지급</p>
            <p className="shadow"> 참가비 : 35,000 원</p>
            <p className="shadow"> 우리은행 1002-048-671946 (박승빈)</p>
          </div>
          <div className="map-content">
            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.1957656052987!2d127.05614041254037!3d37.58824303692843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbb6c7c8d3245%3A0x6d91e4dd74c9688d!2z7IaM7Jq47Iiy!5e0!3m2!1sko!2sgm!4v1573040435588!5m2!1sko!2sgm" width="100%" height="100%" frameBorder="0" style={{border:0}} allowFullScreen=""/>
          </div>          
        </section>

        <section className="starwars">
          <div className="fade"/>
          <div className="crawl">
            {slideElement}
          </div>
        </section>

        
      </div>
      
    );
  }
}

export default App;
