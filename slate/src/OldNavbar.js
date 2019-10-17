import React from 'react';

import AuthService from './auth/AuthService';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

/*
function AuthElements(props){
    const isAuthenticated = props.isAuthenticated;
    if(isAuthenticated){
        return (
            <Nav className="ml-auto">
                <Nav.Link onClick={OldNavbar.onLogout}>Logout</Nav.Link>
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
*/

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Slate
                </Typography>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
 }

class OldNavbar extends React.Component {

    onLogout() {
        AuthService.logout();
    }

    render() {

        return(
            <div>
                <NavBar />
            </div>
        );
        /*
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Slate</Navbar.Brand>
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
        */
    }
}

export default OldNavbar;
