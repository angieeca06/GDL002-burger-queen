import React, {Component} from "react";


class btnAdd extends Component{
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
                 <p>{this.state.count}</p>
                <button onClick={this.handleIncrement} className="btn btn-block btn-outline-primary"> Add +</button>   
            </div>
        )
    }


    
}

export default btnAdd;