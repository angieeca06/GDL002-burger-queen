import React from "react";
import firebase from "../Firebase/InicializacionFirebase";
import Swal from "sweetalert2";

class btnSubmitToKitchen extends React.Component {

    constructor(){
        super();

    this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);
    }

    updateOrderToFirebase = props =>{
        let order = this.props.order;
        const foodOrderFirebase = firebase.database().ref();
        const foodOrder = foodOrderFirebase.child("Ordenes/").push(order);
        Swal.fire(
            'Orden enviada exitosamente',
            '¡Da click para continuar!',
            'success'
          )
        return foodOrder;
    }

    render() {
        return(
            <div>
                <div className="container">
                    <button className="btn btn-outline-danger col-md-12" type="submit" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.updateOrderToFirebase}>Enviar a cocina</button>
                </div>
        </div>
        )
    }
}

export default btnSubmitToKitchen;