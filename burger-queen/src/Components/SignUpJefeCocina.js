import React from "react";
import Navbar from "./NavbarRegister";
import {Link} from "react-router-dom";

const signUpChef = props =>{
    return(
        <form>
            <Navbar/>
            <div className= "form-row">
                <div className= "col-md-8 mb-6">
                <br/>
                    <label for="validationCustom01">Correo electrónico</label>
                    <input type={"email"} className="form-control" id="validationCustom01" placeholder="Correo electrónico" required></input>
                    <div class="valid-feedback">
                        Muy bien¡
                    </div>
                </div>
                <br/>
                <div className= "col-md-8 mb-6">
                <br/>
                    <label for="validationCustom02">Nombre</label>
                    <input type={"text"} className="form-control" id="validationCustom02" placeholder="Nombre" required></input>
                    <div class="valid-feedback">
                        Muy bien¡
                    </div>
                </div>
                <br/>
                <div className= "col-md-8 mb-6">
                <br/>
                    <label for="validationCustom03">No. de empleado</label>
                    <input type={"number"} className="form-control" id="validationCustom03" placeholder="Número de empleado" required></input>
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                    <br/>
                </div>
            </div>
            <Link className=" btn btn-primary btnNextWaiters" type="submit">Siguiente</Link>
        </form>
    );
};

export default signUpChef;