import React, { Component } from 'react';
//import { TweenLite} from '../lib/TweenLite';
//import '../lib/CSSPlugin'

class About extends Component{
    componentDidMount(){
        /*
        let foto = document.getElementById("foto");
        let h2 = document.getElementById("h2");   
        let sub = document.getElementById("sub");  
        let skills = document.getElementById("skills");  

        // Simple Tween
        TweenLite.from(foto, 0.5, { autoAlpha: 0, delay: 0, y: 50 });
        TweenLite.from(h2, 1, { autoAlpha: 0, delay: 0, x: -50 });
        TweenLite.from(sub, 1.5, { autoAlpha: 0, delay: 0, x: -50 });  
        TweenLite.from(skills, 1.5, { autoAlpha: 0, delay: 0, y: 50 });  
        */
        
    }

    render(){
        return(
            <div className="about">
                <div className="inner">
                    <div className="top-about">
                        <div className="text-about">
                            <h2 id="h2" className="color-body">I’m lucky because my work is also one of my passions</h2>
                            <p id="sub"> 
                            Currently working as a creative front-end developer at Modalsource Srl Web Agency, a small studio based in Turin, Italy.<br />
                            I specialize in front-end development but also
                                like trying out other technologies in order to become more flexible.<br /> I enjoy collaborating on interesting projects that I
                                can be proud of.
                            </p>
                            <h3 id="sub"><a target="_blank" href="https://expo.io/@xmabusil">for my latest App projects</a></h3>
                        </div>
                            <div id="foto" className="img-about">
                                <div className="hexa">
                                    <div className="hex1">
                                        <div className="hex2">
                                        <img src={require('../assets/images/about/normal2.jpg')}  alt="" width="290" height="350" />
                                        </div>
                                    </div>
                                </div>
                                <div className="hexagonlink">
                                    <a href="https://www.linkedin.com/in/cristian-santacruz-8a52a293/" target="_blank">
                                    <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <h2>Skills and Techniques</h2>
                        <div id="skills" className="skill-about">
                            <div className="skill">
                                <div className="hexagon">
                                    <i className="fa fa-code" aria-hidden="true"></i>
                                </div>
                                <h3>Development</h3>

                                <p className="color-body">Front end</p>
                                <div className="table-skills">
                                    <ul>
                                        <li>HTML5</li>
                                        <li>CSS3 (Flexbox)</li>
                                        <li>Sass/Less</li>
                                        <li>Gulp/Grunt</li>
                                        <li>Git</li>
                                    </ul>
                                    <ul>
                                        <li>Javascript</li>
                                        <li>Bootstrap 3/4</li>
                                        <li>jQuery</li>
                                        <li>Angularjs/Angular</li>
                                        <li>React js</li>
                                    </ul>
                                </div>

                                <p className="color-body">More</p>
                                <div className="table-skills">
                                    <ul>
                                        <li>Php</li>
                                        <li>React Native</li>
                                    </ul>
                                    <ul>
                                        <li>Java</li>
                                        <li>sql</li>
                                    </ul>
                                </div>

                                <p className="color-body">Content Management System (CMS) & Platform</p>
                                <div className="table-skills ultime">
                                    <ul>
                                        <li>Drupal 7 & Theming</li>
                                        <li>Drupal 8 & Theming(Twig & Yaml)</li>
                                        <li>WordPress</li>
                                    </ul>
                                    <ul>
                                        <li>Platform Liferay 7 & Theming(Freemarker and Soy)</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="skill">
                                <div className="hexagon">
                                    <i className="fa fa-paint-brush" aria-hidden="true"></i>
                                </div>
                                <h3>Design</h3>

                                <p className="color-body">Tools</p>
                                <div className="table-skills">
                                    <ul>
                                        <li>Photoshop</li>
                                        <li>Illustrator</li>
                                    </ul>
                                </div>

                                <p className="color-body">Designer UX</p>
                                <div className="table-skills">
                                    <ul>
                                        <li>Web Design</li>
                                        <li>App Design</li>
                                    </ul>
                                </div>

                            <p className="color-body">About my services</p>
                                <div className="table-skills">
                                    <ul>
                                        <li>UX Design</li>
                                        <li>Mockup</li>
                                        <li>Website Design</li>
                                        <li>Project Concept & Development</li>
                                        <li>UX Design</li>
                                        <li>Web Developer</li>
                                        <li>Drupal 7/8 developer</li>
                                        <li>Drupal 8 Theming Twig Yaml</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default About;