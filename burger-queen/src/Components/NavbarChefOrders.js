import React from "react";
import {Link} from "react-router-dom";



class NavbarChefOrders extends React.Component{

    render(){
        return(
            <div class="container position">
                <nav class="navbar navbar-expand-lg navbar-light">
                        <li className="nav-item navbar-brand col-md-4 text-center btn btn-link letter"><Link className="nav-link active" to="/chef">Ordenes por preparar</Link></li>
                        <button className="nav-item navbar-brand col-md-3 text-center btn btn-link letter"><Link className="nav-link active" to="/">Cerrar sesión</Link></button>
                </nav>
            </div>
        )
    }
}

export default NavbarChefOrders;