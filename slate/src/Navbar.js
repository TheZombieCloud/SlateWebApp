import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { fade } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import './Navbarc.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.17),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.3),
        },
        marginLeft: 0,
        marginRight: theme.spacing(50),
        flexGrow: 1,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(5),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const Appbar = () => {
    const classes = useStyles();
    return(
        <AppBar style={{ backgroundColor: '#FAB941' }} className = {classes.root}>
            <Toolbar>
                <Typography variant = "h6">
                    Slate
                </Typography>
                <div className = {classes.search}>
                    <div className = {classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase placeholder="Search for Friends" />
                </div>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/">Home</NavLink></Button>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/signup">Signup</NavLink></Button>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/login">Login</NavLink></Button>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/settings">Settings</NavLink></Button>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/splash">Splash</NavLink></Button>
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