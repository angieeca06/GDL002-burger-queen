import React from "react";
import "./Styles/SignUp.css";
import {Link} from "react-router-dom";

const navBarFood = props => {
    return (    
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <button className="nav-item navbar-brand col-md-6 text-center btn btn-link letter"><Link className="nav-link active" to="MenuDesayuno">Desayunos</Link></button>
                <button className="nav-item navbar-brand col-md-6 text-center btn btn-link letter"><Link className="nav-link active" to="MenuCena">Comida/Cena</Link></button>
            </nav>
      </div>
    );
};

export default navBarFood;