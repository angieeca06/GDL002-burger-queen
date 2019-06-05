import React from "react";
import {Link} from "react-router-dom";



class NavbarChefOrders extends React.Component{

    render(){
        return(
            <div class="container position">
                <nav class="navbar navbar-expand-lg navbar-light">
                        <li className="nav-item navbar-brand col-md-6 text-center btn btn-link letter"><Link className="nav-link active" to="/navbarOrders">Ordenes por preparar</Link></li>
                        <li className="nav-item navbar-brand col-md-6 text-center btn btn-link letter"><Link className="nav-link active" to="/OrdersPrepared">Ordenes Listas</Link></li>
                </nav>
            </div>
        )
    }
}

export default NavbarChefOrders;