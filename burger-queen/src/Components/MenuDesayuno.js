import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import NavbarFood from "./NavbarFood";
import "./Styles/SignUp.css";
import InputName from "./InputName";
import Comanda from "./Comanda";

class ShowMenuWithFirebase extends Component {
    constructor () {
      super()
      this.state = { 
        Comida: [],
        Desayuno: [],
        Ordenes: []
      }
    }

submit(Item, Price) {

    const order = {
        Item: Item,
        Price: Price
    }

    this.setState({
        Ordenes: [...this.state.Ordenes, order]
    })
}

componentDidMount() {
    const FoodBreakfastRef = firebase.database().ref("Desayuno");
    FoodBreakfastRef.on("value", (snapshot) =>{
        let foodsB = snapshot.val();
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
        <div className="justify-content-center">
            <NavbarFood/>
            <br/>
            <InputName/>
              <br/>
              <div className="all-card col-md-6 bg-transparent justify-content-center">
                  {this.state.Desayuno.map((menuDetail, i) =>
                  <div className="card mb-4 card" key={i}>
                      <button className="row no-gutters " onClick={()=>{
                            this.submit(menuDetail.Item, menuDetail.Price)}}
                            type="submit">
                          <div className="col-md-6">
                              <img src={menuDetail.Image} className="card-img " alt=""/>
                          </div>
                          <div className="col-md-6">
                              <div className="card-body  col-md-12">
                                  <h5 className="card-title">{menuDetail.Item}</h5>
                                  <p className="card-text">{"$" + menuDetail.Price}</p>
                                  {/* <BtnAdd/> */}
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