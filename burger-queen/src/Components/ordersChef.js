import React from "react";
import firebase from "../Firebase/InicializacionFirebase"

class foodOrders extends React.Component{

    constructor(){
        super();

        this.state={
            orders: []
        }
    }

    componentDidMount(){
        let listOrders = [];
        const foodOrdersRef = firebase.database().ref("Ordenes");
        foodOrdersRef.on("value", (s) => {
            let orders = s.val();
            for(let order in orders){
                listOrders.push({
                    id: orders[order].id,
                    Item: orders[order].Item
                });
            }
            this.setState({ orders: listOrders });
        })
    }

    render(){
        return(
            <div className="card">
                <ul className="list-group list-group-flush">
                    {this.state.orders.map((orders, i)=>
                        <div key={i}>
                            <li className="list-group-item">{orders.Item}</li>
                        </div>
                        )}
                </ul>
            </div>
        )
    }
}

export default foodOrders;