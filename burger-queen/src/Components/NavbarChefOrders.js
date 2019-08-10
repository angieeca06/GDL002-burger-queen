import React from "react";
import {Link} from "react-router-dom";



class NavbarChefOrders extends React.Component{

    render(){
        return(
                <nav class="navbar navbar-expand-lg col-md-12 navbar-light position col-sm-12">
                        <li className="nav-item navbar-brand col-md-6 text-center btn btn-link letter col-sm-6 col-6"><Link className="nav-link active" to="/chef">Ordenes por preparar</Link></li>
                        <button className="nav-item navbar-brand col-md-6 text-center btn btn-link letter col-sm-6 col-6"><Link className="nav-link active" to="/">Cerrar sesión</Link></button>
                </nav>
        )
    }
}

export default NavbarChefOrders;