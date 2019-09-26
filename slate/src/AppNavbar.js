import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';

import AuthService from './auth/AuthService';

function AuthElements(props){
    const isAuthenticated = props.isAuthenticated;
    if(isAuthenticated){
        return (
            <Nav className="ml-auto">
                <Nav.Link onClick={AppNavbar.onLogout}>Logout</Nav.Link>
            </Nav>
        )
    }else{
        return (
            <Nav className="ml-auto">
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
        )
    }
}

class AppNavbar extends React.Component {

    onLogout() {
        AuthService.logout();
    }

    render() {
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">APPNAME</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <AuthElements isAuthenticated={AuthService.isAuthenticated} />
                
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;
