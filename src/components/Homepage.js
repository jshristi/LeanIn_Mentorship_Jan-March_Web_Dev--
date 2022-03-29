import React from "react";
import profile from '../images/one.svg';
import shape1 from '../images/shape4.svg';
import shape2 from '../images/shape5.svg';
import classes from '../UI/Homepage.module.css';

function Homepage () {
    return(
        <>
            <div className={classes.container}>
                <img src={profile} alt="Profile"></img>
                <div>
                    <h3>Web Developer & Designer</h3>
                    <h1>SHRISTI JHA</h1>
                    <h5>I’m a proficient Coder and a skilled front-end developer.
                        I love sketching and dancing.</h5>
                    <a href="https://drive.google.com/file/d/1ZrB-w4bK50wIBxUrdFm0kBp-FZRurQQM/view?usp=sharing"><button>Resume</button></a>
                </div>
                <div className={classes.shape1}>
                    <img width='30.15px' height='20.44px' src={shape1} alt='shape'></img>
                </div>
                <div className={classes.shape2}>
                    <img src={shape2} alt='shape'></img>
                </div>
            </div>
        </>
    )
}
 export default Homepage;