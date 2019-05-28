import React from "react";
import firebase from "../Firebase/InicializacionFirebase"

class btnSubmitToKitchen extends React.Component {

    constructor(){
        super();

    this.updateOrderToFirebase = this.updateOrderToFirebase.bind(this);
    }
    updateOrderToFirebase = props =>{
        const order = this.props.order;
        const foodOrder =  firebase.database().ref('Ordenes/').child("order").push().key;
        let updates = {};
        updates["Ordenes/" + foodOrder] = order;
        return firebase.database().ref().update(updates);
    }

    render() {
        return(
            <div className="container">
                {console.log(this.props.order)}
                <button className="btn btn-outline-danger col-md-12" type="submit" onClick={this.updateOrderToFirebase}>Enviar a cocina</button>
            </div>
        )
    }
}

export default btnSubmitToKitchen;