import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import $ from 'jquery';
//import axios from "axios"

//import screens
import Home from '../screens/home';
import Portfolio from './../screens/portfolio';
import About from './../screens/about';
import Contact from './../screens/contact';


class Main extends Component {
    
   
    componentDidMount = () =>{
        //animation
        $(document).ready(function () {

            //console.log("dentroadjihaicn");
            //home
            $(".content-home").animate({ opacity: 0 }, 0);
            $(".content-home").animate({ opacity: 1 }, 500);
            

        });
        //hamburger
        $('#nav-icon4').click(function() {
            //console.log("dentroadjihaicn");
            $(this).toggleClass('open');
            $(".nav .link").toggleClass('open');
        });
        
        //link active
        $('.nav .link a').click(function () {
           // console.log("dentroadjihaicn");
            $("#nav-icon4").removeClass('open');
            $(".nav .link").removeClass('open');
            
            $(this).addClass('active').siblings().removeClass('active');
        });

        $('#toPortfolio').click(function () {
            //console.log("dentroadjihaicn");
            $(".nav .link a:nth-child(2)").addClass('active').siblings().removeClass('active');
        });
 
    }
    
    
    

    contentAll(){
        return (
            <div className="container">
                <div id="navToggle">

                    <div id="nav-icon4">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>

                </div>

                <Router>
                    <div className="nav">
                        <ul className="link">
                            <Link to="/" className="overlay-logo">t</Link>
                            <NavLink to="/" className="navLink" activeClassName="active">Home</NavLink>

                            <NavLink to="/portfolio/web" className="navLink" activeClassName="active">Portfolio</NavLink>


                            <NavLink to="/about" className="navLink" activeClassName="active">About</NavLink>


                            <NavLink to="/contact" className="navLink" activeClassName="active">Contact</NavLink>


                        </ul>

                    

                        <Route
                            exact
                            path="/"
                            component={Home} />

                        <Route
                            path="/portfolio"
                            component={Portfolio} />


                        <Route

                            path="/about"
                            component={About} />


                        <Route
                            path="/contact"
                            component={Contact} />


                    </div>
                </Router>



            </div>
        );
    }

    render (){
        
            return (
                this.contentAll()
            )
        
    }
}

export default Main;