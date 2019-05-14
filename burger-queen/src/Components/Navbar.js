import React from "react";
import "./Styles/SignUp.css";
import {Link} from "react-router-dom";

const navBar = props => {
    return (    
        <nav className="navBar">
            {/* <h2 className="logo">{props.title}</h2> */}
            <ul className = "nav-menu">
                <li><Link className="Waiters nav-bar" to="Meseros">Meseros</Link></li>
                <li><Link className="Waiters nav-bar" to="JefeDeMeseros">Jefe de meseros</Link></li>
            </ul>
        </nav>
    );
};

export default navBar;