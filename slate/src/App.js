import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes.js";
import Navbar from './Navbar.js';

function checkLogged() {
    fetch('/login', {
        method: 'GET',
    }).then(response => {
        if (response.ok){
            localStorage.setItem('log', 'true');
        } else {
            localStorage.setItem('log', 'false');
        }
    });
    //throw new Error(localStorage.getItem('log'));
    //var value = await setTimeout(delay, 1000);
}

function returnLog(){
    return localStorage.getItem('log');
}

function App() {
    checkLogged();
    return (
        <div className="App">
            <BrowserRouter>
          
            <Routes isLoggedIn = {returnLog()}/>
        </BrowserRouter>
        </div>
    );
}

export default App;
