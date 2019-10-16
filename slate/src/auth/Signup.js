import * as React from "react";
import { motion, Variants } from "framer-motion";
import "./LoginSignup.css";



const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

const signupPage: Variants = {
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
            debug: 'debug',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setState = this.setState.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        //this.state.debug=this.state.username;

        /*var request = new XMLHttpRequest();
        request.open(['POST'], 'http://127.0.0.1:5000/', true);
        request.setRequestHeader('Usersignup','Content-Type : application/json; charset=UTF-8');
        request.send(this.state);*/
        event.preventDefault();
        this.state.debug=this.handleChange="1";
        this.forceUpdate();


    }

    render() {
        return(
            <div className="signupPage" animate={this.state.signup ? "signup" : "login"} variants={signupPage}>
                <div className="signup-area">
                    <h1> {this.state.debug} </h1>

                    <a href = "/Login">
                    <div className="loginRedirect" onClick={() => this.setState({ signup: false})}>
                           Login
                        </div>
                    </a>

                    <div id="login" className="signup-box">
                        <h1>S L A T E</h1>
                        <form id="form" onSubmit={this.handleSubmit} className="signup-box">
                            <label>
                                <div className="username-font"> USERNAME </div>
                                <input id="username" type="text" value={this.state.username} onChange={this.handleChange} required />
                            </label>
                            <br />
                            <label>
                                <div className="username-font"> PASSWORD </div>
                                <input id="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                            </label>
                            <br />
                            <label>
                                <div className="username-font"> EMAIL </div>
                                <input id="email" type="text" value={this.state.email} onChange={this.handleChange} required />
                            </label>
                            <br />
                            <input className="inputSubmitOrange" type="submit" value="Signup"/>

                        </form>
                    </div>

                </div>

            </div>

        )
    }
}

export default Signup;