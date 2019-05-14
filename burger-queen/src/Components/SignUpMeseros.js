import React from "react";

const signUpWaiters = props =>{
    return(
        <div className= {"main-container"}>
            <div className= {"container"}>
                <input type={"text"} placeholder={"Nombre"}></input>
                <input type={"text"} placeholder={"Apellido"}></input>
                <input type={"text"} placeholder={"# de empleado"}></input>
                <button className={`btnNextWaiters`}>Siguiente</button>
            </div>
        </div>
    );
};

export default signUpWaiters;