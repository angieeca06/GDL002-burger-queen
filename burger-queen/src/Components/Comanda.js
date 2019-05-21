import React from "react";

export class Comanda extends React.Component{
    render(){
        const order = this.props.foodOrder.map((food, i) => {
            return(
                <div>
                    <ul key={i} className="list-group col-md-12">
                        <li className="list-group-item d-flex justify-content-between align-items-center col-md-6">
                            {food.Item}
                            <span className="btn btn-success">{"$" + " " + food.Price}</span>
                        </li>
                    </ul>
                </div>
            )
        })
        return(
            order
        )
    }
}

export default Comanda;