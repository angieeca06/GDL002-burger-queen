import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import NavbarFood from "./NavbarFood";
import BtnAdd from "./BtnAdd"

class ShowMenuWithFirebase extends Component {
    constructor () {
      super()
      this.state = { 
        Comida: [],
        Desayuno: [],
        Ordenes: []
      }
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
                        <form>
                            <div className= "col-md-12 mb-6">
                                <br/>
                                <input type={"text"} className="form-control form-control-lg" placeholder="Nombre del cliente" required></input>
                                
                            </div>
                        </form>
                        <br/>
                        <br/>
                        <div className="all-card card col-md-6">
                            {this.state.Comida.map((menuDetail) =>
                            <div className="card mb-4 card">
                                <div className="row no-gutters">
                                    <div className="col-md-5">
                                        <img src={menuDetail.Image} className="card-img" alt=""/>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body col-md-20">
                                            <h5 className="card-title">{menuDetail.Item}</h5>
                                            <p className="card-text">{"$" + menuDetail.Price}</p>
                                            <BtnAdd/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                )
            }

                
}

export default ShowMenuWithFirebase;