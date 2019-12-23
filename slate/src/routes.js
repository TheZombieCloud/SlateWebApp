import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Schedule from './Schedule.js';

import Settings from './Settings.js';
import Splash from './Splash.js';
import ProfilePage from './ProfilePage.js';

class Routes extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoggedIn: props.isLoggedIn};
    }

    render(){
        if (this.state.isLoggedIn==='true'){
            //throw new Error (localStorage.getItem('log'));
            return (
              <div>
                  <Switch>
                      <Route exact path = "/" component = {Schedule}/>
                  </Switch>
              </div>
            );
        }
        else {
            //throw new Error (localStorage.getItem('log'));
            return (
                <div>
                    <Switch>
                        <Route exact path="/" component={Splash}/>
                        <Route exact path="/signup" component={Signup}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/schedule" component={Schedule}/>
                        <Route exact path="/pp" component={ProfilePage}/>
                    </Switch>
                </div>

            );
        }
    }
}

export default Routes;
