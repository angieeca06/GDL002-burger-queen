import React, {Component} from "react";
import firebase from "../Firebase/InicializacionFirebase";
import Comanda from "./Comanda"
import BtnSubmitToKitchen from "./btnSubmitChef";
import ClientName from "./InputName";

class breakfastMenu extends Component{

    constructor(){
        super();
        this.state = {
            breakfast: [],
            orders: [],
            total : 0
        }

    this.sumItem = this.sumItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.submit = this.submit.bind(this)
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

    deleteItem(e, menu){
        e.preventDefault(e)
        this.setState(prevState => ({
            orders: prevState.orders.filter(element => element !== menu)
        }));
    }

    sumItem () {
        const itemPrice = this.state.orders.map((el) => el.Price)
        const products = itemPrice.reduce((sum, result) => {
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
                        {this.state.breakfast.map((menuDetail, i) =>
                            <div className="card mb-4 card" key={i}>
                                <button className="row no-gutters " id={menuDetail.id} onClick={ () =>{
                                    this.submit(menuDetail.Item, menuDetail.Price);
                                    }}
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
                        <ClientName/>
                        <Comanda foodOrder={this.state.orders} clickDelete = {this.deleteItem}/>
                        <button className="btn btn-info col-md-11" onClick={this.sumItem}>Total: $ {this.state.total}</button>
                        <BtnSubmitToKitchen order={this.state.orders} ClientName={<ClientName/>} />
                    </div>
                </div>
            </div>
        )
    }
}

export default breakfastMenu;
