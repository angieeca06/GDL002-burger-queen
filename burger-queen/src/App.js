import React, {Component} from 'react';
import {HashRouter , Route, Switch} from "react-router-dom";
import Navbar from "./Components/NavbarRegister";
import SignUpWaiters from "./Components/SignUpMeseros";
import SignUpChef from "./Components/SignUpJefeCocina";
import NavbarFood from "./Components/NavbarFood";
import "./Components/Styles/SignUp.css";
import ChefOrders from "./Components/ordersChef";
import firebase from "./Firebase/InicializacionFirebase";
import Swal from "sweetalert2";

class App extends Component {

  constructor(){
    super();

    this.state = {
      user: {},
      userDB : {}
    }
    this.authListener = this.authListener.bind(this);
  }

componentDidMount(){
  this.authListener();
}

authListener(){
  firebase.auth().onAuthStateChanged((user) =>{
    if(user){
      this.setState({user});
    }else{
      this.setState({user: null});
        Swal.fire('¡Inicia sesión!')
    }
  })
  console.log(this.state.userDB)
}

render() {
  console.log(this.state.user)
  return(
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/meseros" render={() => this.state.user ? (<NavbarFood user={this.state.user}/>) : (<SignUpWaiters userDB={this.state.userDB}/>)} />
          <Route exact path="/chef" render={() => this.state.user ? (<ChefOrders user={this.state.user}/>) : (<SignUpChef userDB={this.state.userDB}/>)} />
        </Switch>
      </div>
    </HashRouter >
  );
  
};
}
export default App;
