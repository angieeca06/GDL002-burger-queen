import React from "react";
import firebase from "../Firebase/InicializacionFirebase"

class foodOrders extends React.Component{

    constructor(){
        super();

        this.state={
            ordersChef: [], 
            counter: 0
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
        
        // const orderArray = []
        // foodOrdersRef.on("value", (s) => {
        //     let allOrders = s.val();
        //     // console.log(allOrders)
        //     const objectOrders = Object.values(allOrders)
        //     for(let objectOrder in objectOrders){
        //         objectOrders[objectOrder].map((value, i) =>{
        //         orderArray.push({
        //             Item: value.Item,
        //             Id: objectOrder
        //         })
        //         })
        //         // console.log([objectOrder].Item)
        //         this.setState({ ordersChef: orderArray })
        //     }
        // })
    }

    render(){
        console.log(this.state.ordersChef)
        return(
            <div class="card">
                {this.state.ordersChef.map((orders, i) =>
                <div class="card-body">
                    <h5 class="card-title">Orden #{i+1}</h5>
                    <div>
                        {console.log(orders)}
                        {orders.map((item, i)=>
                        <div>
                            <p class="card-text"></p>
                            <a class="card-link">{item.Item}</a>
                            <a class="card-link">{item.Price}</a>
                        </div>
                        )}
                    </div>      
                </div>
                )}
            </div>
            // <div>
            //     {this.state.ordersChef.map((order, i) => 
            //     <div className="card border-info mb-3">
            //         <div className="card-header">{order.id}</div>
            //         <div className="card-body text-info">
            //             <p className="card-text">{order.Item}</p>
            //         </div>
            //     </div>
            //     )}
            // </div>
        )
    }
}

export default foodOrders;