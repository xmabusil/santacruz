import React from 'react';
import ReactDOM from 'react-dom';
//css
//import './index.css';
import './css/normalize.css';
import './css/style.css';

//component
//import { BrowserRouter } from "react-router-dom";

//component main App
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
