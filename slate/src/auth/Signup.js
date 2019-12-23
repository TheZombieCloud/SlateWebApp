import * as React from "react";
import { motion, Variants } from "framer-motion";
import "./LoginSignup.css";
import img2 from "../RightTopimg.svg";
import history from '../history.js';
import { NavLink } from 'react-router-dom';

const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const signupPage = {
    signup: {
        x: -0.9 * vw,
        y: 0.9 * vh
    },
    login: {
        x: 0,
        y: 0
    }
};

class Signup extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            signup: false,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setState = this.setState.bind(this);

    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        var response=fetch('/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
        }).then(response => {
           if (response.ok){
               history.push('/login');
           }
           else {
               history.push('/signup');
           }
        });
        //this.state.username=this.handleChange=response.responseText;
        //this.state.forceUpdate();
        event.preventDefault();
    }

    render() {
        return(
            <div className="loginpage">
                <div className="slideCenterl">
                    <img className="img2l" src={img2} width="400" height="400"/>
                    <div className="titlel1">
                        <h1 className="titlel2">Slate</h1>
                        <h1 className="titlel3">Register</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="username">
                                <h6 className="inputtext">Username</h6>
                                <input id="username" className="inputfield" type="text" value={this.state.username}
                                       onChange={this.handleChange} required/>
                            </div>
                            <div className="password">
                                <h6 className="inputtext">Email</h6>
                                <input id="email" className="inputfield" type="email" value={this.state.email}
                                       onChange={this.handleChange} required/>
                            </div>
                            <div className="password">
                                <h6 className="inputtext">Password</h6>
                                <input id="password" className="inputfield" type="password" value={this.state.password}
                                       onChange={this.handleChange} required/>
                            </div>
                            <p className="new">Already have an account? <NavLink className = "new" to = "/login">Login</NavLink></p>
                            <input type="submit" className="text3" value="Register"/>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default Signup;
