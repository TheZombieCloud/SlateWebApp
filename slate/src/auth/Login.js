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

class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            email: '',
            signup: false,
            debug: 'debug'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setState = this.setState.bind(this);
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value})
    }

    handleSubmit(event) {
        //var request = new XMLHttpRequest();
        console.log(this.state.debug);
        this.state.debug=this.handleChange=this.state.username;
        fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      json: JSON.stringify({
          username: "fucku",
          password: "f"
      })
    })
        //var url="http://127.0.0.1:5000/login";
           // ?username="+this.state.username
           // +"&password="+this.state.password;

       // request.open('POST', url, true);
        //request.setRequestHeader('Userlogin','Content-Type : application/json; charset=UTF-8');
        //request.send(JSON.stringify({username:this.state.username, password:this.state.password}));
        event.preventDefault();
    }

    render() {
        return(
            <div className="login-area">
                <div id="login" className="login-box">
                    <h1>S L A T E</h1>

                    <form id="form" onSubmit={this.handleSubmit} className="login-box">
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
                        <input type="submit" value="Login2" className="inputSubmitGray"/>
                    </form>
                </div>
                <h1> {this.state.debug}</h1>
                    <a href = "/signup">
                        <div className="signupRedirect" onClick={() => this.setState({ signup: true })}>
                            Signup
                        </div>
                    </a>
                </div>
        )
    }
}

export default Login;