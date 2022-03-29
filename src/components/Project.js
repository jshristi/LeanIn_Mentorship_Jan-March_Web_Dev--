import React from "react";
import classes from '../UI/Project.module.css';
import shape3 from '../images/shape3.svg';
import shape4 from '../images/shape4.svg';
import shape5 from '../images/shape5.svg';
import Project1 from '../images/Project1.svg';
import Project2 from '../images/Project2.svg';

function Project () {
    return(
        <>
            <div>
                <div className={classes.shape3}>
                    <img src={shape3} alt='shape'></img>
                </div>
                <div className={classes.heading}><h1>Projects</h1></div>
                    <ul className={classes.ProGrp1}>
                        <li> 
                            <h3>Expense Tracker</h3>
                            <img src={Project1} alt='Project1Img'/>
                            <p>I’ve made the Expense
                                 Tracker app using HTML,
                                 CSS & ReactJS.
                            </p>
                        </li>
                    </ul>
                    <ul className={classes.ProGrp2}>
                        <li> 
                            <h3>The Recipe App</h3>
                            <img src={Project2} alt='Project1Img'/>
                            <p>I’ve build the Recipe app using 
                                HTML, CSS & JS. It uses an API 
                                to get random recipes.
                            </p>
                        </li>
                    </ul>
                <div className={classes.shape4}>
                    <img src={shape4} alt='shape2'></img>
                </div>
                <div className={classes.shape5}>
                    <img src={shape5} alt='shape3'></img>
                </div>
            </div>
        </>
    )
}
 export default Project;