import React from "react";
import "./Styles/SignUp.css";
import {Link} from "react-router-dom";

class navBar extends React.Component{

    render(){
        return (  
            <div className="container position">
                <nav className="navbar navbar-expand-lg navbar-light">
                        <li className="nav-item navbar-brand col-md-6 text-center btn btn-link letter"><Link className="nav-link active" to="/meseros">Meseros</Link></li>
                        <li className="nav-item navbar-brand col-md-6 text-center btn btn-link letter"><Link className="nav-link active" to="/chef">Chef</Link></li>
                </nav>
          </div>
        );
    }
};

export default navBar;