import React from "react";
import "./Styles/Menu.css";

const input = props =>{
    return (
        <form>
            <div className= "col-md-12 mb-6 d-flex justify-content-center" >
                <br/>
                <input type={"text"} className="form-control form-control-lg background" placeholder="Nombre del cliente" required></input>
            </div>
        </form>
    )
}

export default input;