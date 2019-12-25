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
            friendname: '',

        };
        this.handleChange = this.handleChange.bind(this);
    }
     Logout() {
        fetch('/logout', {
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
    Search(event) {
        fetch('/findfriend', {
              method: 'GET',
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                friend: this.state.friendname
            })
        }).then(response => {

            if (response.ok) {
               //idk
            } else {
                //idk
            }
        })
        event.preventDefault();
    }
    render(){
        return(
            <div className = "container">
                <div className = "container2">
                    <img className="img2p" src={img2} width="400" height="400"/>
                    <NavLink to = "/pp"><h1 className="titlepp">Slate</h1></NavLink>
                    <div className = "main2">
                        <div class = "profile">
                            <h1>Profile</h1>
                            <div className="settingsBox">
                                <button className="settingButton">Change Username</button>
                                <button className="settingButton">Change Password</button>
                                <button className="settingButton">Change Email</button>
                                <button className="settingButton">Change Schedule</button>
                                <button className="settingButton" onClick={this.Logout}>Log Out</button>
                            </div>
                            <form className = "ppform">
                                <div className = "search">
                                    <h6 className = "searchfrt">Search for Friends</h6>
                                    <input className = "searchBar" onDragEnter={this.search}  value={this.state.friendname} onChange={this.handleChange} type = "text" placeholder = "Search..."/>
                                </div>
                            </form>
                        </div>
                        <div class = "feed">
                            <h1>Feed</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
