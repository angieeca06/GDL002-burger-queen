import React from "react";
import firebase from "../Firebase/InicializacionFirebase";

class btnSubmitToKitchen extends React.Component {

    constructor(){
        super();

    this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);
    }

    updateOrderToFirebase = props =>{
        let order = this.props.order;
        const foodOrderFirebase = firebase.database().ref();
        const foodOrder = foodOrderFirebase.child("Ordenes/").push(order);
        return foodOrder;
    }

    render() {
        return(
            <div>
                <div className="container">
                    <button className="btn btn-outline-danger col-md-12" type="submit" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.updateOrderToFirebase}>Enviar a cocina</button>
                </div>
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Orden enviada exitosamente¡
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default btnSubmitToKitchen;