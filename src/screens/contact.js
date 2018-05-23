import React, { Component } from 'react';
//import { TweenLite} from '../lib/TweenLite';
//import '../lib/CSSPlugin'

class Contact extends Component{

    componentDidMount() {
        /*
        let nada = document.getElementById("tefa");
       
        TweenLite.from(nada, 0.5, { autoAlpha: 0, delay: 0, y: 50 });
        */

    }

     render(){
         return(
             <div  className="Contact">
                 <h3 id="tefa" className="email">
                 Have a cool project in mind, and think I can help you with it?<br/>
                 Feel free to e-mail me at <a className="color-body">info.santacruz.work@gmail.com</a>
                </h3>
            </div>
         )
     }
}
export default Contact;
