import React from 'react';
import './PPc.css';
import "./SettingsStyles.css";

class ProfilePage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class = "container">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1500" preserveAspectRatio="none">
                        <polygon fill="white" points="0,0 650,0 850,1500 0,1500"/>
                    </svg>
                </div>
                <div class = "profile">
                    <h1>Profile</h1>
                    <div className="settingsBox">
                        <button className="settingButton">Update Profile Picture</button>
                        <button className="settingButton">Change Username</button>
                        <button className="settingButton">Change Password</button>
                        <button className="settingButton">Change Email</button>
                        <button className="settingButton">Change Schedule Preferences</button>
                    </div>
                </div>
                <div class = "feed">
                    <h1>Feed</h1>
                </div>
                <div class = "clear"></div>
            </div>
        );
    }
}

export default ProfilePage;

