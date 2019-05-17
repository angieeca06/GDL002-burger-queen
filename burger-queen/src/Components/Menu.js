import React, {Component} from "react";
import Menu from "../Components/MenuBreakfast.json";
import btnAdd from "./btnAdd"

class showMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    };

    handleIncrement = () =>{
        this.setState({
            count: this.state.count + 1
        });
    };
    render(){
    return(
        <div>
            <form>
                <div className= "col-md-12 mb-6">
                    <br/>
                    <input type={"text"} className="form-control form-control-lg" placeholder="Nombre del cliente" required></input>
                </div>
            </form>
            <br/>
            <br/>
            <div className="all-card card col-md-6">
                {Menu.map((menuDetail , index) =>
                <div className="card mb-4 card" key={index}>
                    <div className="row no-gutters">
                        <div className="col-md-5">
                            <img src={menuDetail.Image} className="card-img" alt=""/>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body col-md-20">
                                <h5 className="card-title">{menuDetail.Item}</h5>
                                <p className="card-text">{"$" + menuDetail.Price}</p>
                                <p>{this.state.count}</p>
                                {/* <button onClick={this.handleIncrement} className="btn btn-block btn-outline-primary"> Add +</button>    */}
                                <btnAdd/>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}
};

export default showMenu;