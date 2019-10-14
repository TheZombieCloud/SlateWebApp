import React from 'react';

class Settings extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
          <div>
              <p>Update Profile Picture</p>
              <p>Change Username</p>
              <p>Change Password</p>
              <p>Change Email</p>
              <p>Change Schedule Preferences</p>
          </div>
        );
    }

}

export default Settings;