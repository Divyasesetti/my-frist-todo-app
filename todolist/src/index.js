import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Todolist from './Todolist';
import registerServiceWorker from './registerServiceWorker';
var destination = document.querySelector("#container");
ReactDOM.render(
    <div>
        <Todolist/>
    </div> ,
    destination      

);
registerServiceWorker();
