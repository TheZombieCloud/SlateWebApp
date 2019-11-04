import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes.js";
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>        
        <Navbar isLoggedIn={false}/>
          
        <Routes />
      </BrowserRouter>

    </div>
  );
}

export default App;
