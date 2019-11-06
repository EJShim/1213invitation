import React, {Component} from 'react';
import background from '../resource/img/background.jpg';
import kistlogoIcon from '../resource/img/kistlogo.ico';
import './Main.css'


class Main extends Component{

    render(){
        //calculate d-day
        const now = new Date();
        const then = new Date("december 13, 2019");
        const gap = now.getTime() - then.getTime();
        const day = Math.abs( Math.floor(gap / (1000 * 60 * 60 * 24)));
        return(
            <div className="bgimg w3-display-container w3-animate-opacity w3-text-white" 
                style={{backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('+ background + ')'}}>
                <div className="w3-display-topleft w3-padding-large w3-xlarge">
                    <img className="logo" src={kistlogoIcon} alt="logo"></img>
                </div>

                <div className="w3-display-middle">
                    <h1 className="w3-jumbo w3-animate-top"> COMING SOON</h1>
                    <hr className="w3-border-grey" style={{margin:"auto",width:40+'%'}}></hr>
                    <p className="w3-medium w3-center"> Dec 13, 2019 </p>
                    <p className="w3-large w3-center">{day} days left</p>
                </div>

                <div className="w3-display-bottomleft w3-padding-large">
                    Powered by <a href="https://ejshim.github.io">EJShim</a>
                </div>
                </div>
        );
    }

};

export default Main;