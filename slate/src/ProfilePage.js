import React from 'react';
import './PPc.css';
import "./SettingsStyles.css";
import img2 from "./RightTopimg.svg";
import history from "./history.js";
import {NavLink} from "react-router-dom";

class ProfilePage extends React.Component{
     constructor(props){
         super(props);
         this.state = {
             active: false,
             activemail: false,
             friendname: '',
         };
         this.togglePopup = this.togglePopup.bind(this);
         this.togglePopupe = this.togglePopupe.bind(this);
         this.handleChange=this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
     }
    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }
     togglePopup() {
         this.setState({
             active: !this.state.active
         });
     }

     togglePopupe() {
         this.setState({
             activemail: !this.state.activemail
         });
     }

     logout() {
         fetch('/logou', {
             method: 'POST'
         }).then(response => {
             if (response.ok) {
                 localStorage.setItem('auth', 'false');
                 history.push('/');
             } else {
                 history.push('/pp');
             }
         })
     }
     handleSubmit(event) {
        fetch('/find', {
              method: 'POST',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fn: this.state.friendname
            })
        }).then(response => {
            if (response.ok) {
                localStorage.setItem('auth', 'true');
                history.push('/pp');
                return response.json();
                //print the list
            } else {
                localStorage.setItem('auth', 'true');
                history.push('/pp');
                return response.json();
               //do it again
            }
        })

    }
     render(){
         return(
             <div>
                 <div className = "container">
                     <div className = "container2">
                         <img className="img2p" src={img2} width="400" height="400"/>
                         <NavLink to = "/pp"><h1 className="titlepp">Slate</h1></NavLink>
                         <div className = "main2">
                             <div class = "profile">
                                 <h1>Profile</h1>
                                 <div className="settingsBox">
                                     <button className="settingButton" onClick = {this.togglePopup}>Change Password</button>
                                     <button className="settingButton" onClick = {this.togglePopupe}>Change Email</button>
                                     <NavLink to = "/schedule"><button className = "settingButton2">Change Schedule</button></NavLink>
                                     <button className="settingButton" onClick={this.logout}>Log Out</button>
                                 </div>
                                 <form className = "ppform">
                                     <div className = "search">
                                         <form onSubmit = {this.handleSubmit}>
                                         <h6 className = "searchfrt">Search for Friends</h6>
                                         <input className ="searchBar" id="friendname" type = "text" value={this.state.friendname} onChange={this.handleChange} placeholder = "Search..."/>
                                         <input type = "submit"  value = "search"/>
                                         </form>
                                         </div>
                                 </form>
                             </div>
                             <div class = "feed">
                                 <h1>Feed</h1>
                             </div>
                         </div>
                     </div>
                 </div>
                 {this.state.active ? <Popup toggle = {this.togglePopup}></Popup>: null}
                 {this.state.activemail ? <PopupEmail toggle = {this.togglePopupe}></PopupEmail>: null}
             </div>
         );
     }
}

class Popup extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            password: '',
            retype: '',
            wrong: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.props.toggle();
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event){
        if (this.state.retype===this.state.password) {
            fetch('/password', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: this.state.password
                })
            }).then(response => {
                if (response.ok) {
                    this.props.toggle();
                }
            })
        }
        else {
            this.setState({
                wrong: true
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className = "modal">
                <div className = "content">
                    <span className = "close" onClick = {this.handleClick}>&times;</span>
                    <p className = "bigtext">Change Password</p>
                    <form onSubmit = {this.handleSubmit}>
                        <div className = "search2">
                            <h6 className = "searchfrt">New Password</h6>
                            <input id = "password" className = "searchBar2" type = "password" value={this.state.password} onChange={this.handleChange} required/>
                        </div>
                        <div className = "search2">
                            <h6 className = "searchfrt">Retype Password</h6>
                            <input id = "retype" className = "searchBar2" type = "password" value={this.state.retype} onChange = {this.handleChange} required/>
                        </div>
                        <input type = "submit" className = "textpop" value = "Update"/>
                    </form>
                    {this.state.wrong ? <h1 className = "match">Your passwords do not match</h1> : null}
                </div>
            </div>
        );
    }
}

class PopupEmail extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            retype: '',
            wrong: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.props.toggle();
    }

    handleChange(event){
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit(event){
        if (this.state.retype===this.state.email) {
            fetch('/email', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email
                })
            }).then(response => {
                if (response.ok) {
                    this.props.toggle();
                }
            })
        }
        else {
            this.setState({
                wrong: true
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <div className = "modal">
                <div className = "content">
                    <span className = "close" onClick = {this.handleClick}>&times;</span>
                    <p className = "bigtext">Change Email</p>
                    <form onSubmit = {this.handleSubmit}>
                        <div className = "search2">
                            <h6 className = "searchfrt">New Email</h6>
                            <input id = "email" className = "searchBar2" type = "email" value={this.state.email} onChange={this.handleChange} required/>
                        </div>
                        <div className = "search2">
                            <h6 className = "searchfrt">Retype Email</h6>
                            <input id = "retype" className = "searchBar2" type = "email" value={this.state.retype} onChange = {this.handleChange} required/>
                        </div>
                        <input type = "submit" className = "textpop" value = "Update"/>
                    </form>
                    {this.state.wrong ? <h1 className = "match">Your emails do not match</h1> : null}
                </div>
            </div>
        );
    }
}

export default ProfilePage;
