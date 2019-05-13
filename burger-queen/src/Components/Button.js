import React from "react";
import signUp from "./Registro";


const Button = props =>{
    const action  = props.name;

    return (
        <button className={`Button`} onClick = {
            () => {
                if("name" === "Meserxs"){
                    console.log("Hola 1");
                }else if("name" === "Jefe de cocina"){
                    console.log("Hola 2");
                }
            // console.log(action);
            }
            }>
        {action} 
        </button>
    );
};

export default Button;