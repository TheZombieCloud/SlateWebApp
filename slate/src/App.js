import React from 'react';
import logo from './logo.svg';
import './App.css';
import Schedule from "./Schedule";
import Login from "./auth/OldLogin.js"
import Signup from "./auth/Signup.js";
import Routes from "./routes.js";

function App() {
  return (
    <div className="App">
        <Routes />
    </div>
  );
}

export default App;
