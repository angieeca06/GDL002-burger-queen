import React from "react";
import "./Styles/SignUp.css";
import {Link} from "react-router-dom";

const navBar = props => {
    return (    
        <nav className="navBar">
            <ul className = "nav justify-content-center">
                <li className="nav-item"><Link className="nav-link active" to="Meseros">Meseros</Link></li>
                <li className="nav-item"><Link className="nav-link active" to="Chef">Chef</Link></li>
            </ul>
        </nav>
    );
};

export default navBar;