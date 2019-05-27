import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Components/NavbarRegister";
import SignUpWaiters from "./Components/SignUpMeseros";
import SignUpChef from "./Components/SignUpJefeCocina";
import MenuDesayuno from "./Components/MenuDesayuno";
import MenuCena from "./Components/MenuCena";
import NavbarFood from "./Components/NavbarFood";
import "./Components/Styles/SignUp.css";
import signUpWaiters from './Components/SignUpMeseros';

class App extends Component {

render() {
  return(
    <BrowserRouter>
      <div className="App">
        <Switch>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/navbarFood" component={NavbarFood} />
        <Route exact path="/meseros" component={SignUpWaiters} />
        <Route exact path="/chef" component={SignUpChef} />
        {/* <Route exact path="/MenuDesayuno" render={() => <MenuDesayuno />} /> */}
        {/* <Route exact path="/MenuCena" render={() => <MenuCena/>} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
  
};
}
export default App;
