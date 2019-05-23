import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import NavbarFood from "./NavbarFood";
import "./Styles/SignUp.css";
import "./Styles/Menu.css";
import Comanda from "./Comanda";

class ShowMenuWithFirebase extends Component {
    constructor () {
      super()
      this.state = { 
        Comida: [],
        Desayuno: [],
        Ordenes: [],
        name: ""
      }
      this.addName = this.addName.bind(this);
    }

updateName ( key, value){
    this.setState ({
        [key]:value
    })
}

addName (e){
    e.preventDefault(e);
    
    this.setState({
        name: this.state.name + e.target.value
    });
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
        console.log(this.state.name)
      return(
        <div className="justify-content-center">
            <NavbarFood/>
            <br/>
            <form>
                <div className= "col-md-12 mb-6 d-flex justify-content-center" >
                    <br/>
                    <input 
                    type={"text"} 
                    id={"clientName"} 
                    value={this.state.name}
                    className="form-control form-control-lg background" 
                    placeholder="Nombre del cliente" 
                    onChange={e => this.updateName('name', e.target.value)} 
                    required />
                    <button type="submit" className="btn btn-success col-md-2" onClick={(e) => this.addName(e)}>Enviar</button>
                </div>
            </form>              
            <br/>   
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <div className="all-card col-md-12 bg-transparent justify-content-center">
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
                        </div>
                        <div className="col bg-transparent">
                            {this.state.name}
                            <Comanda foodOrder={this.state.Ordenes} name={this.state.name} />
                        </div>
                    </div>
                </div>
              
            </div>
      )
    }   
  }


export default ShowMenuWithFirebase;