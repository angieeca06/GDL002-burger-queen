import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import Comanda from "./Comanda"

class breakfastMenu extends Component{

    state = {
        breakfast: [],
        orders: []
    }

    submit(Item, Price) {

        const order = {
            Item: Item,
            Price: Price
        }

        this.setState({
            orders: [...this.state.orders, order]
        })
    }

    componentDidMount() {
        let newStateBreakfast = [];
        const FoodBreakfastRef = firebase.database().ref("Desayuno");
        FoodBreakfastRef.on("value", (snapshot) =>{
            let foodsB = snapshot.val();
            for(let food in foodsB){
            newStateBreakfast.push({
                id: food,
                Image: foodsB[food].Image,
                Item: foodsB[food].Item,
                Price: foodsB[food].Price,
                Sabores: foodsB[food].Sabores
            });
            }
            this.setState({ breakfast: newStateBreakfast });
        });

    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="all-card col-md-12 bg-transparent justify-content-center">
                        {this.state.breakfast.map((menuDetail, i) =>
                            <div className="card mb-4 card" key={i}>
                                {console.log(menuDetail.id)}
                                <button className="row no-gutters " id={menuDetail.id} onClick={ () =>{
                                    this.submit(menuDetail.Item, menuDetail.Price)}}
                                    type="submit">
                                    <div className="col-md-6">
                                        <img src={menuDetail.Image} className="card-img " alt=""/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body  col-md-12">
                                            <h5 className="card-title">{menuDetail.Item}</h5>
                                            <p className="card-text">{"$" + menuDetail.Price}</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="col bg-transparent">
                        <Comanda foodOrder={this.state.orders} />
                    </div>
                </div>
            </div>
        )
    }
}

export default breakfastMenu;
