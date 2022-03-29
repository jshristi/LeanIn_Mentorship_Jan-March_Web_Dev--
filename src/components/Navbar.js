import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineHome} from 'react-icons/ai';
import {BsPersonSquare,BsFillChatSquareTextFill,BsCircleSquare} from 'react-icons/bs';
//import {GrProjects} from 'react-icons/gr';
import {FaProjectDiagram} from 'react-icons/fa';
//import {MdOutlinePermContactCalendar} from 'react-icons/md';

function Navbar (props) {
    return (
        <div className={props.set ? 'navbar active': 'navbar'} >
            <ul>
                <li>
                    <Link to="/" ><AiOutlineHome/>Home</Link>
                </li>
                <li>
                    <Link to="/About" ><BsPersonSquare/>About</Link>
                </li>
                <li>
                    <Link to="/Skills" ><FaProjectDiagram/>Skills</Link>
                </li>
                <li>
                    <Link to="/Project" ><BsCircleSquare/>Project</Link>
                </li>
                <li>
                    <Link to="/Contact" ><BsFillChatSquareTextFill/>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;