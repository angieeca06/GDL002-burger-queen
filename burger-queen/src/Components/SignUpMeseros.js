import React from "react";

const signUpWaiters = props =>{
    return(
        <div className= {"main-container"}>
            <div className= {"container"}>
                <input className="NameWaiter" type={"text"} placeholder={"Nombre"}></input>
                <input className="LastNameWaiter" type={"text"} placeholder={"Apellido"}></input>
                <input className="IdWaiter" type={"text"} placeholder={"# de empleado"}></input>
                <button className={`btnNextWaiters`}>Siguiente</button>
            </div>
        </div>
    );
};

export default signUpWaiters;