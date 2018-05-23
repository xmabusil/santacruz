import React, { Component } from 'react';
//import { TweenLite} from '../lib/TweenLite';
//import '../lib/CSSPlugin.js';

class App extends Component{
    componentDidMount() {
        /*
        let nada = document.getElementById("tefa");
        TweenLite.from(nada, 0.5, { autoAlpha: 0, delay: 0, y: 50 });

        */

    }
    render(){
        return(
            <div id="tefa" className="screen-app">
                <h1>for my latest App projects</h1>
                <div className="bottom-button">
                    <div className="button-home"> <a href="https://expo.io/@xmabusil" target="_blank"className="btn btn-sm animated-button button">Go</a> </div>
                </div>
            </div>
        )
    }
}
export default App;