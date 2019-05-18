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
    const FoodBreakfastRef = firebase.database().ref("Desayuno");
    FoodBreakfastRef.on("value", (snapchot) =>{
        let foodsB = snapchot.val();
        let newStateBreakfast = [];
        for(let food in foodsB){
        newStateBreakfast.push({
            id: food,
            Image: foodsB[food].Image,
            Item: foodsB[food].Item,
            Price: foodsB[food].Price,
            Sabores: foodsB[food].Sabores
        });
        }
        this.setState({
        Desayuno: newStateBreakfast
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
                  {this.state.Desayuno.map((menuDetail) =>
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