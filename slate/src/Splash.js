import * as React from "react";
import { render } from "react-dom";
import { motion, Variants } from "framer-motion";
import "./splashStyles.css";
import Trianglify from 'react-trianglify';
import img from './Social-media-Cristina.svg';
import img2 from './RightTopimg.svg';
import { NavLink } from 'react-router-dom';

const SlateX = (props) => {
    const [active, setActive] = React.useState(false);
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 200;
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const slates = {
        active: { x: 0.5 * vw },
        disabled: { x: 0}
    };
    const container = {
        active: {
            transition: {
                staggerChildren: 0.1
            }
        },
        disabled: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            className="container"
            variants={container}
            animate={active? "active" : "disabled"}
            onClick={() => setActive(!active)}
        >
            {["4.", "5.", "6.", "This is Requeim."].map(value => (
                <div className="stickydiv">
                    <motion.div
                        key={value}
                        className="slates"
                        variants={slates}
                    >
                        {value}
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
};

const SlateY = (props) => {
    const [active, setActive] = React.useState(false);
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 200;
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const slatesY = {
        active: { x:  0.5 * vw},
        disabled: { x: 0}
    };
    const container = {
        active: {
            transition: {
                staggerChildren: 0.1
            }
        },
        disabled: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <motion.div
            className="container"
            variants={container}
            animate={active? "active" : "disabled"}
            onHoverStart={() => setActive(true)}
            onClick={() => setActive(!active)}
        >
            {["One", "Two", "Three", "This is Requeim."].map(value => (
                <div className="stickydiv">
                    <motion.div
                        key={value}
                        className="slatesY"
                        variants={slatesY}
                    >
                        {value}
                    </motion.div>
                </div>
            ))}
        </motion.div>
    );
};

const Splash = () => {
    return(
        <div className="main">
                <div class="slideCenter">
                    <img className="img2" src={img2} width="400" height="400"/>
                    <div class = "title">
                        <h1 class = "title2">Slate</h1>
                        <h1 class = "title4">The new social media specifically for students</h1>
                        <hr/>
                        <p class = "title3">Made by students from the University of Waterloo, interact with others by sharing schedules and planning events.</p>
                        <div className="enter">
                            <NavLink className="login" to = "/login">
                                <h3 className = "text">Login</h3>
                            </NavLink>
                            <NavLink className="signup" to = "/signup">
                                <h3 className = "text">Signup</h3>
                            </NavLink>
                        </div>
                    </div>
                    <div class = "img">
                        <img src = {img} height = "600" width = "600"/>
                    </div>
                </div>
                <div>
                    <footer>
                        <div class = "footer1">
                            <h3>Slate</h3>
                            <p>328 Regina Street North<br/>Suite 1103/1104<br/>(416)219-7460</p>
                            <p class = "copyright">&copy; Slate 2019</p>
                        </div>
                        
                    </footer>
                </div>
        </div>
    );
}
export default Splash;
