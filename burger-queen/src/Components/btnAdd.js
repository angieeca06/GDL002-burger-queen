import React, {Component} from "react";

class btnAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    };

    btnIncrement = () =>{
        this.setState({
            count: this.state.count + 1
        });
    };

    btnDecrement = () =>{
        this.setState({
            count: this.state.count -1
        })
    }

    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.btnIncrement} className="btn btn-block btn-outline-primary col-md-12">+</button> 
                <button onClick={this.btnDecrement} className="btn btn-block btn-outline-primary col-md-12">-</button>   
            </div>
        )
    }    
}

export default btnAdd;