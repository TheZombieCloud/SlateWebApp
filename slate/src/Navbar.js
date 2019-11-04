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
        marginRight: theme.spacing(60),
        flexGrow: 1,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '80%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        verticalAlign: 'middle',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '4px',
    },
}));

const Appbar = (props) => {
    const classes = useStyles();
    return(
        <AppBar style={{ backgroundColor: '#FAB941' }} className = {classes.root}>
            <Toolbar>
                <NavLink style={{color: 'white'}} to = "/">
                    <Typography variant = "h6">
                        Slate
                    </Typography>
                </NavLink>
                <div className = {classes.search}>
                    <SearchIcon className = {classes.searchIcon}/>
                    <InputBase placeholder="Search for Friends" />
                </div>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/">Home</NavLink></Button>
                <LoginControl isLoggedIn={props.isLoggedIn}></LoginControl>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/splash">Splash</NavLink></Button>
                <Button><NavLink className = "inactive" activeClassName = "active" to = "/pp">Profile/Feed</NavLink></Button>
                
            </Toolbar>
        </AppBar>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: props.isLoggedIn};
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn){
            return <Button><NavLink className = "inactive" activeClassName = "active" to = "/login">Login</NavLink></Button>
        }
        return <Button><NavLink className = "inactive" activeClassName = "active" to = "/signup">Signup</NavLink></Button>
    }

}

class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {isLoggedIn: props.isLoggedIn}
    }

    setLoggedIn(loggedIn) {
        this.setState({isLoggedIn: loggedIn});
    }

    render(){
        return(
            <div>
                <Appbar isLoggedIn={this.state.isLoggedIn}/>
            </div>
        );
    }
}

export default Navbar;
