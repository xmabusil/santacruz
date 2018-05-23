import React, { Component } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

class Web extends Component {
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
        //get dataaaa
        const url = 'https://raw.githubusercontent.com/xmabusil/devsantacruz/master/src/data/Data.json';

        // in axios access data with .data

        axios.get(url)
            .then(response => {
                console.log(response)
                this.setState({
                    data: response.data.PortfolioData,
                    loading: false,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    


    loading() {
        return (
            <div className={`${this.state.showingAlert ? 'load-hidden' : 'load-shown'}`}>
                <div className="showbox">
                    <div className="loader">
                        <svg className="circular" viewBox="25 25 50 50">
                            <circle className="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
                        </svg>

                        <h1 className="load-title">t</h1>
                    </div>
                </div>
            </div>
        )
    }

    webDetails(data){
        console.log(data);
        this.setState({
            dataDetails: data,
            press: false
        });
    }
    render() {
        let content;

        if (this.state.loading) {
            
            content = this.loading();
        } else {
            
            content = this.state.data.map((data, index) => {
               // console.log(index);
                return (
                    <div key={index} className="web-screen">
                        <div className="text-img">
                            <div className="text">
                                <Link to={"web/"+data.link} onClick={() => this.webDetails(data)}>
                                    <h1>{data.name}</h1>
                                    <h2>{data.description}</h2>
                                </Link>
                            </div>
                            <div className="img">
                                <Link to={"web/" + data.link} onClick={() => this.webDetails(data)}>
                                    <div className="hexagon">
                                        <img className="image" src={data.images.logo}/>
                                    </div>
                                </Link>
                            </div>
                           
                        </div>  
                        
                    </div>
                   
                );
                
            });
            
        } 

        
            return (
                <div className="web-screens">
                    {content}
                </div>
            )
        
    

        
    }

}
export default Web;

