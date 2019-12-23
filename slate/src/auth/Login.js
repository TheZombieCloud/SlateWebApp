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

class Login extends React.Component {

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
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event) {
        fetch('/login', {
              method: 'POST',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(response => {
            if (response.ok) {
                localStorage.setItem('auth', 'true');
                history.push('/pp');
                return response.json();
            } else {
                history.push('/login');
                return response.json();
            }
        })
        event.preventDefault();
    }

    render() {
        return(
            <div class = "loginpage">
                <div class = "slideCenterl">
                    <img className="img2l" src={img2} width="400" height="400"/>
                    <div className="titlel1">
                        <NavLink to = "/"><h1 className="titlel2">Slate</h1></NavLink>
                        <h1 className = "titlel3">Welcome Back</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div class = "username">
                                <h6 class = "inputtext">Username</h6>
                                <input id = "username" class = "inputfield" type = "text" value={this.state.username} onChange={this.handleChange} required/>
                            </div>
                            <div class = "password">
                                <h6 class = "inputtext">Password</h6>
                                <input id = "password" class = "inputfield" type = "password" value={this.state.password} onChange={this.handleChange} required/>
                            </div>
                            <p className="new">New around here? <NavLink className = "new" to = "/signup">Signup</NavLink></p>
                            <input type="submit" className="text2" value = "Login"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
