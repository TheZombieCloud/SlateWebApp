import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import Schedule from "../Schedule";
import Signup from "./Signup";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        var request = new XMLHttpRequest();
        request.open('POST', '', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(this.state);
        event.preventDefault();
    }
    
    render() {
        return(
            <div id="login">
                <h1>Login</h1>
                <form id="form" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input id="username" type="text" value={this.state.username} onChange={this.handleChange} required />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input id="password" type="password" value={this.state.password} onChange={this.handleChange} required />
                    </label>
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New here? <a href = "/signup">Signup</a></p>
            </div>
        )
    }
}

export default Login;
