import React from "react";
import firebase from "../Firebase/InicializacionFirebase";
import NavbarOrders from "./NavbarChefOrders";

class foodOrders extends React.Component{

    constructor(){
        super();

        this.state={
            ordersChef: []
        }
    }

    componentWillMount(){
        function snapshotToArray(snapshot){
            let orders = []

            snapshot.forEach(order => {
                const items = order.val();
                items.key = order.key;

                orders.push(items)
            });
            return orders
        }
        const dbFoodOrdersRef = firebase.database().ref();
        const foodOrdersRef = dbFoodOrdersRef.child("Ordenes/");
        foodOrdersRef.on("value", s=>{
            const ordersForArray = snapshotToArray(s);
            this.setState({
                ordersChef: ordersForArray
            })
        })
    }

    render(){
        return(
            <div>
                <NavbarOrders/>
                <div class="card ">
                    {this.state.ordersChef.map((orders, i) =>
                    <div class="card text-white bg-info">
                        <h5 class=" card-header">Orden #{i+1}</h5>
                        <div>
                            {orders.map((item, i)=>
                            <div>
                                <p class="card-text">{item.Item}</p>
                            </div>
                            )}
                        </div>  
                        <button onClick={(e) => this.deleteOrder(orders)}>Orden lista</button>    
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default foodOrders;