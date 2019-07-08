import React from "react";
import Navbar from "./NavbarRegister"
import {Link} from "react-router-dom";
import firebase from "../Firebase/InicializacionFirebase";
import Swal from "sweetalert2";

class signUpWaiters extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
    }

    login(e){
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error)=>{
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Algo salio mal!',
                footer: 'Vuelve a intetarlo'
              })
        });
    }

    render(){
        return(
            <form className="form">
                <Navbar/>
                <div className= "form-row">
                    <div className= "col-md-8 mb-6">
                    <br/>
                        <label>Correo electrónico</label>
                        <input type={"email"} className="form-control" onChange={this.handleChange} id="email" placeholder="Correo electrónico" required></input>
                        <div className="valid-feedback">
                            Muy bien¡
                        </div>
                    </div>
                    <br/>
                    <div className= "col-md-8 mb-6">
                    <br/>
                        <label>Nombre</label>
                        <input type={"text"} className="form-control" id="validationCustom02" placeholder="Nombre" required></input>
                        <div className="valid-feedback">
                            Muy bien¡
                        </div>
                    </div>
                    <br/>
                    <div className= "col-md-8 mb-6">
                    <br/>
                        <label>No. de empleado</label>
                        <input type={"password"} className="form-control" onChange={this.handleChange} id="password" placeholder="No de empleado" required></input>
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        <br/>
                    </div>
                    <button className=" btn btn-primary col-md-6" type="submit" onClick={this.login}><Link className="btnNextWaiters" to="/navbarFood">Siguiente</Link></button>
                </div>
            </form>
        );
    }
    
};

export default signUpWaiters;