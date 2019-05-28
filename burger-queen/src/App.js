import React, {Component} from 'react';
import {HashRouter , Route, Switch} from "react-router-dom";
import Navbar from "./Components/NavbarRegister";
import SignUpWaiters from "./Components/SignUpMeseros";
import SignUpChef from "./Components/SignUpJefeCocina";
import NavbarFood from "./Components/NavbarFood";
import "./Components/Styles/SignUp.css";

class App extends Component {

render() {
  return(
    <HashRouter basename="/">
      <div className="App">
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/navbarFood" component={NavbarFood} />
          <Route exact path="/meseros" component={SignUpWaiters} />
          <Route exact path="/chef" component={SignUpChef} />
        </Switch>
      </div>
    </HashRouter >
  );
  
};
}
export default App;
