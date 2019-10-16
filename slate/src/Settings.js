import React from 'react';
import "./SettingsStyles.css";

class Settings extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div className="settingsBox">
              <button className="settingButton">Update Profile Picture</button>
              <button className="settingButton">Change Username</button>
              <button className="settingButton">Change Password</button>
              <button className="settingButton">Change Email</button>
              <button className="settingButton">Change Schedule Preferences</button>
          </div>
        );
    }

}

export default Settings;