import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Schedule from './Schedule.js';

import Settings from './Settings.js';
import Splash from './Splash.js';
import ProfilePage from './ProfilePage.js';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('auth') === 'true'
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class Routes extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Splash}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/login" component={Login}/>
                    <PrivateRoute exact path="/schedule" component={Schedule}/>
                    <PrivateRoute exact path="/pp" component={ProfilePage}/>
                </Switch>
            </div>

        );
    }
}

export default Routes;
