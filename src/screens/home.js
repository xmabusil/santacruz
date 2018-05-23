import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import $ from 'jquery';
//import { TweenLite} from '../lib/TweenLite';
//import '../lib/CSSPlugin';
class Home extends Component {


    content(){
        return(
            <div className="content-home" >

                <div className="glitch">
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                    <div className="glitch__img"></div>
                </div>

                <div className="titles">
                    <div className="title-home" id="me">
                        <h1 className="content__title">San</h1>
                        <h1 className="content__title">t</h1>
                        <h1 className="content__title">acruz</h1>
                    </div>
                    <h2 id="subme" className="content__text">Creative Front end Developer</h2>
                    <div className="button-home">
                        <Link to="/portfolio/web" id="toPortfolio" className="btn btn-sm animated-button button">View portfolio</Link>
                    </div>
                </div>
            </div> 
        )
    }
    render(){


            return(
                this.content()
            )
        
    } 
}

export default Home;