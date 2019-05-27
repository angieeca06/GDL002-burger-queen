import React from "react";
import ClientName from "./InputName"

export class Comanda extends React.Component{

    deleteItem = (e, i) => {
        this.props.clickDelete(e,i)
    }

    render(){
        const order = this.props.foodOrder.map((food, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-12">
                            <span className="col-md-6">{food.Item}</span>
                            <span className="btn btn-success col-md-2">{"$" + " " + food.Price}</span>
                            <button className="btn btn-outline-danger col-md-1" onClick={(e) => this.deleteItem(e, food)}>x</button>
                        </li>
                    </ul>
                </div>
            )
        })
        return(
            <div>
                <ClientName/>
                {order}
            </div>
        )
    }
}

export default Comanda;