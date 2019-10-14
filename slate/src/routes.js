import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login'
import Signup from './auth/Signup';
import Schedule from './Schedule.js';
import Navbar from './Navbar.js';

class Routes extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path = "/" component = {Schedule} />
                        <Route exact path = "/signup" component={Signup} />
                        <Route exact path = "/login" component={Login} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default Routes;