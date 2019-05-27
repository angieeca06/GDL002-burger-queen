import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import "./Styles/SignUp.css";
import Comanda from "./Comanda"

class foodMenu extends Component{

    constructor(){
        super();

        this.state={
            dinner : [],
            orders: [], 
            total: 0
        }

    this.sumItem = this.sumItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
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
        const FoodRef = firebase.database().ref("Comida");
        let newState = [];
            FoodRef.on("value", (snapchot) =>{
                let foods = snapchot.val();
                for(let food in foods){
                newState.push({
                    id: food,
                    Image: foods[food].Image,
                    Item: foods[food].Item,
                    Price: foods[food].Price,
                    Sabores: foods[food].Sabores
                });
                }
                this.setState({ dinner : newState });
            });
    }

    deleteItem(e, menu){
        e.preventDefault(e)
        this.setState(prevState => ({
            orders: prevState.orders.filter(element => element !== menu)
        }))
    }

    sumItem () {
        const itemPrice = this.state.orders.map((el) => el.Price)
        const products = itemPrice.reduce((sum, result) =>{
            return sum + result;
        });

        this.setState({
            total: products
        })
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="all-card col-md-12 bg-transparent justify-content-center">
                        {this.state.dinner.map((menuDetail, i) =>
                            <div className="card mb-4 card" key={i}>
                                <button className="row no-gutters " id={menuDetail.id} onClick={()=>{
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
                        <Comanda foodOrder={this.state.orders} clickDelete = {this.deleteItem} />
                        <button onClick={this.sumItem}>Total: $ {this.state.total}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default foodMenu;
