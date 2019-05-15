import React from "react";
import {Link} from "react-router-dom";

const signUpWaiters = props =>{
    return(
        <div className= {"main-container"}>
            <div className= {"container"}>
                <input className="EmailWaiter" type={"email"} placeholder={"Email"}></input>
                <input className="NameWaiter" type={"text"} placeholder={"Nombre"}></input>
                <input className="IdWaiter" type={"text"} placeholder={"# de empleado"}></input>
                <button><Link className={`btnNextWaiters`} to="Menu">Siguiente</Link></button>
            </div>
        </div>
    );
};

export default signUpWaiters;