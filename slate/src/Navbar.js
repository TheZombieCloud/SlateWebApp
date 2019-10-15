import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appbar: {

    },
    title: {
        flexGrow: 1,
    },
}));

const Appbar = () => {
    const classes = useStyles();
    return(
        <AppBar position = "fixed" style={{ backgroundColor: '#FAB941' }} className = {classes.root}>
            <Toolbar>
                <Typography variant = "h6">
                    Slate
                </Typography>
                <Button><NavLink to = "/">Home</NavLink></Button>
                <Button><NavLink to = "/signup">Signup</NavLink></Button>
                <Button><NavLink to = "/login">Login</NavLink></Button>
                <Button><NavLink to = "/settings">Settings</NavLink></Button>
            </Toolbar>
        </AppBar>
    );
}

class Navbar extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Appbar/>
            </div>
        );
    }
}

export default Navbar;