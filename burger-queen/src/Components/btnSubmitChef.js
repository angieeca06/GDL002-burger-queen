import React from "react";
import firebase from "../Firebase/InicializacionFirebase"

class btnSubmitToKitchen extends React.Component {

    constructor(){
        super();

    this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);
    }
    updateOrderToFirebase = props =>{
        let order = this.props.order;
        const foodOrder =  firebase.database().ref('Ordenes/').child("order").push().key;
        let updates = {};
        updates["Ordenes/" + foodOrder] = order;
        return (firebase.database().ref().update(updates), order="")

    }

    render() {
        return(
            <div>
                <div className="container">
                    {console.log(this.props.order)}
                    <button className="btn btn-outline-danger col-md-12" type="submit" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.updateOrderToFirebase}>Enviar a cocina</button>
                </div>
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Orden enviada exitosamente¡
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default btnSubmitToKitchen;