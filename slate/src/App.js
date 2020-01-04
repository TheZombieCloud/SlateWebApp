import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Routes from "./routes.js";
import Navbar from './Navbar.js';
import history from './history.js';

function checkLogged() {
    localStorage.setItem('auth', 'false');
    fetch('/login', {
        method: 'GET',
    }).then(response => {
        if (response.ok){
            history.push('/pp');
            localStorage.setItem('auth', 'true');
            return;
        } else{
            return;
        }
    });
    //throw new Error(localStorage.getItem('log'));
    //var value = await setTimeout(delay, 1000);
}

function returnLog(){
    return localStorage.getItem('log');
}

function App() {
    if (localStorage.getItem('auth')==='false') {
        checkLogged();
    }
    return (
        <div className="App">
            <Router history = {history}>
          
                <Routes/>
            </Router>
        </div>
    );
}

export default App;
