import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';
//import Home from '../home';

//import screenWork from './screen-work';

class Gimax extends Component {
    constructor() {
        super();
        this.state = {
            dataDetails: '',
            data: '',
            loading: true,
            press: false
        };
    }

    componentDidMount = () => {
        //portfolio

        //get dataaaa
        const url = 'https://raw.githubusercontent.com/xmabusil/santacruz/master/src/data/Data.json';

        // in axios access data with .data

        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data.PortfolioData,
                    loading: false
                });
            })
            .catch(error => {
                console.log(error);
            });

    }



    loading() {
        return (
            <div classNameName={`${this.state.showingAlert ? 'load-hidden' : 'load-shown'}`}>
                <div classNameName="showbox">
                    <div classNameName="loader">
                        <svg classNameName="circular" viewBox="25 25 50 50">
                            <circle classNameName="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                        </svg>

                        <h1 classNameName="load-title">t</h1>
                    </div>
                </div>
            </div>
        )
    }

  
    render() {
        let content;

        if (this.state.loading) {
            content = this.loading();
        } else {
            content = this.state.data.map((data, index) => {

                if(index === 0){
                    return (
                        <div className="pages">

                            <div className="before">
                                <div className="content-pag">
                                    <div className="hexagon">
                                        <img src={data.images.logo} className="logo-exa"/>
                                    </div>
                                </div>
                                <div className="triangle"></div>
                            </div>
                            <div className="top-pages">
                                <div className="right-pages">
                                    <h1>{data.name}</h1>
                                    <h3>{data.description}</h3>
                                    <p>
                                       {data.content}
                                    </p>
                                </div>
                                <div className="left-pages">
                                    <img src={data.images.desktop} alt="" className="desktop"/>
                                    <img src={data.images.tablet} alt="" className="tablet"/>
                                    <img src={data.images.mobile} alt="" className="smart"/>
                                </div>
                            </div>
                                            
                            <div className="button-home live"> <a href={data.see_live_link} className="btn btn-sm animated-button button" target="_blank">See it live</a> </div>

                            <div className="released">
                                <h3 className="color-body">Released</h3>
                                <p>{data.released}</p>
                            </div>

                            <div className="tec">
                                <h3>Design</h3>
                            </div>

                            <div className="technologies">
                                <ul>
                                    <li>{data.skills.design[0]}</li>
                                    <li>{data.skills.design[1]}</li>
                                </ul>
                            </div>

                            <div className="tec"><h3>Technologies</h3></div>
                            <div className="technologies">
                                <ul>
                                    <li>{data.skills.technologies[0]}</li>
                                    <li>{data.skills.technologies[1]}</li>
                                    <li>{data.skills.technologies[2]}</li>
                                    <li>{data.skills.technologies[3]}</li>
                                    <li>{data.skills.technologies[4]}</li>
                                    <li>{data.skills.technologies[5]}</li>
                                    <li>{data.skills.technologies[6]}</li>
                                </ul>
                            </div>
                            
                            <div className="bottom-pages">
                                <img src={data.images.desktop} alt="" className="desktop" />
                                <img src={data.images.tablet} alt="" className="tablet" />
                                <img src={data.images.mobile} alt="" className="smart" />
                            </div>

                            <div className="bottom-button">
                                <div className="button-home"> <Link to="/portfolio/web" className="btn btn-sm animated-button button">Back</Link> </div>
                            </div>
    
                        </div>

                    );
                }

            });

        }


        return (
            <div classNameName="web-screens">
                {content}
            </div>
        )




    }

}
export default Gimax;