import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login'
import Signup from './auth/Signup';
import Schedule from './Schedule.js';
import Navbar from './Navbar.js';
import Settings from './Settings.js';
import Splash from './Splash.js';

class Routes extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <div position = "sticky">
                        <Navbar />
                    </div>
                    <div>
                        <Switch>
                            <Route exact path = "/" component = {Schedule} />
                            <Route exact path = "/signup" component={Signup} />
                            <Route exact path = "/login" component={Login} />
                            <Route exact path = "/settings" component={Settings}/>
                            <Route exact path = "/splash" component={Splash}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;