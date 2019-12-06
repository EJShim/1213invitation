import React, {Component} from 'react';
import background from '../resource/img/kivengerse.jpg';
import kistlogoIcon from '../resource/img/kistlogo.ico';
import './Main.css'


class Main extends Component{

    render(){
        //calculate d-day
        const now = new Date();
        const then = new Date("december 13, 2019");
        const gap = now.getTime() - then.getTime();
        const day = Math.abs( Math.floor(gap / (1000 * 60 * 60 * 24)));

        const backgroundStyle = {
            backgroundImage : 'url('+ background + ')'            
        };

        return(
            <div className="bgimg" style={backgroundStyle}>                
                <div className="w3-display-topleft w3-padding-large w3-xlarge">
                    <img className="logo" src={kistlogoIcon} alt="logo"></img>
                </div>
            </div>
        );
    }

};

export default Main;