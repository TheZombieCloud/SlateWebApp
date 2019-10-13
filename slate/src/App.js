import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppNavbar from "./AppNavbar";
import Schedule from "./Schedule";
import Login from "./auth/Login.js"

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Login/>
      <Schedule />
      
    </div>
  );
}

export default App;
