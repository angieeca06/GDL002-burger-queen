import React from "react";


const Button = props =>{
    const action  = "hola" + props.name;

    return (
        <button className={`Button Button-primary`} onClick = {
            () => {console.log(action)}}>
        {action} 
        </button>
    );
};

export default Button;