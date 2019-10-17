import * as React from "react";
import { render } from "react-dom";
import { motion, Variants } from "framer-motion";
import "./splashStyles.css";

const Redirect = () => {
    return(
        <div className="tabb">
            <a href="https:\\kissanime.ru"><br/>Click to suck dick</a>.
        </div>
    );
}

const SlateX = (props) => {
    const [active, setActive] = React.useState(false);
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) - 200;
    const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    const slates: Variants = {
        active: { x: 0.5 * vw },
        disabled: { x: 0}
    };
    const container: Variants = {
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
    const slatesY: Variants = {
        active: { x:  0.5 * vw},
        disabled: { x: 0}
    };
    const container: Variants = {
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
            <Redirect/>
            <div>
                <div class="slideCenter">
                    You are cordially invited to collaborate.
                </div>
                <div className="stickydiv">
                    <SlateX/>
                </div>
                <div class="slideLeft" >
                    {"   Cows are superheros."}
                </div>
            </div>
            <div className="stickydiv">
                <SlateY/>
            </div>
            <div className="slideRight">
                Sign up for github now.
            </div>
            <div className="slideCenter">
                Go commit some changes.
            </div>
        </div>
    );
}
export default Splash;