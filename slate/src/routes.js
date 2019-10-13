import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Login from './auth/Login'
import Signup from './auth/Signup';
import About from './About';

class Routes extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/about" component={About} />
                <Route exact path="/login" component={Login} />
            </Switch>
        );
    }
}

export default Routes;