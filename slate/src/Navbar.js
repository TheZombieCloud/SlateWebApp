import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/signup">Signup</NavLink>
                <NavLink to = "/login">Login</NavLink>
            </div>
        );
    }
}

export default Navbar;