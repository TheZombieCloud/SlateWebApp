import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavbar from "./AppNavbar";
import Schedule from "./Schedule";
import Login from "./auth/Login.js"
import Signup from "./auth/Signup.js";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Login/>
      <Signup/>
      <Schedule />
    </div>
  );
}

export default App;
