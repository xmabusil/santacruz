import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
//import $ from 'jquery';

//import axios from 'axios';

import Web from './works/web';
import App from './works/app';
import Design from './works/design';
//import screenWork from './works/screen-work'
//site work

import Gimax from './works/site-work/gimax';
import Blogdellacasa from './works/site-work/blogdellacasa';
import Greennews from './works/site-work/greennews';


class Portfolio extends Component{
    render(){
        return(
            <div className="content-portfolio screens">
                <div className="inner">
                    <ul className="portfolio-link">
                        <li>
                            <NavLink className="navlink" activeClassName="activePortf" to="/portfolio/web">Web</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="activePortf" to="/portfolio/app">App</NavLink>
                        </li>
                        <li>
                            <NavLink className="navlink" activeClassName="activePortf" to="/portfolio/design">Design</NavLink>
                        </li>
                    </ul>

                    <Route exact path="/portfolio/web" component={Web} />
                    <Route exact path="/portfolio/app" component={App} />
                    <Route exact path="/portfolio/design" component={Design} />
                    
                    <Route exact path="/portfolio/web/gimax" component={Gimax} />
                    <Route exact path="/portfolio/web/blog_della_casa" component={Blogdellacasa} />
                    <Route exact path="/portfolio/web/green_news" component={Greennews} />
                    
                    
                </div>
            </div>
        )
    }
}




export default Portfolio;