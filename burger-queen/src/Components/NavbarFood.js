import React from "react";
import "./Styles/SignUp.css";
import BreakfastMenu from "./MenuDesayuno";
import FoodMenu from "./MenuCena";
import {Link} from "react-router-dom";

class btnsMenu extends React.Component{

    constructor () {
        super ();
        
        this.state = {
            btnState : "1"
        }
        this.btnClick = this.btnClick.bind(this);
    }

    btnClick(e) {
        const id = e.target.id
        this.setState({ btnState: id})
    }

    render(){
        return(
            <div className="container position">
                    <button className="nav-item navbar-brand col-md-5 text-center btn btn-link letter" id="1" onClick={(e) => {this.btnClick(e)}}>Desayunos</button>
                    <button className="nav-item navbar-brand col-md-5 text-center btn btn-link letter" id="2" onClick={(e) => {this.btnClick(e)}} >Comida/Cena</button>
                    <button className="nav-item navbar-brand col-md-2 text-center btn btn-link"><Link className="nav-link active" to="/">Cerrar sesión</Link></button>
                    {this.state.btnState === "1" ? <BreakfastMenu/> : <FoodMenu/>}
            </div>
        )
    }
}

export default btnsMenu;
