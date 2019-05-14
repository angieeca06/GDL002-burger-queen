import React from "react";
import SignUp from "./SignUpMeseros";
import "./Styles/SignUp.css"


const navBar = props => {
    return (    
        <nav className={"navBar"}>
            <h2 className={"logo"}>Burger Queen</h2>
            <ul className = {"nav-menu"}>
                <li className={"Waiters nav-bar"}><a href={"#"}>Meseros</a></li>
                <li className={"Head-chef nav-bar"}><a href={"#"}>Jefe de meseros</a></li>
            </ul>
        </nav>
    );
};

export default navBar;