import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import NavbarFood from "./NavbarFood";
import Comanda from "./Comanda";
import InputName from "./InputName";

class ShowMenuWithFirebase extends Component {
    constructor () {
      super()
      this.state = { 
        Comida: [],
        Desayuno: [],
        Ordenes: []
      }
    }

    submit(Item,Price) {
        const order = {
        Item: Item,
        Price: Price
        }

        this.setState({
            Ordenes: [...this.state.Ordenes, order]
        })
    }
    componentDidMount() {
        const FoodRef = firebase.database().ref("Comida");
            FoodRef.on("value", (snapchot) =>{
                let foods = snapchot.val();
                let newState = [];
                for(let food in foods){
                newState.push({
                    id: food,
                    Image: foods[food].Image,
                    Item: foods[food].Item,
                    Price: foods[food].Price,
                    Sabores: foods[food].Sabores
                });
                }
                this.setState({
                Comida: newState
                });
            });
            }

            render(){
                return(
                <div>
                        <NavbarFood/>
                        <br/>
                        <InputName/>
                        <br/>
                        <div className="all-card col-md-6 bg-transparent justify-content-center">
                            {this.state.Comida.map((menuDetail) =>
                            <div className="card mb-4 card">
                                <button className="row no-gutters" onClick={()=>{
                            this.submit(menuDetail.Item, menuDetail.Price)}}
                            type="submit">
                                    <div className="col-md-6">
                                        <img src={menuDetail.Image} className="card-img" alt=""/>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card-body col-md-12">
                                            <h5 className="card-title">{menuDetail.Item}</h5>
                                            <p className="card-text">{"$" + menuDetail.Price}</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            )}
                        </div>
                        <Comanda foodOrder={this.state.Ordenes}/>
                    </div>
                )
            }

                
}

export default ShowMenuWithFirebase;