import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/NavbarRegister";
import SignUpWaiters from "./Components/SignUpMeseros";
import SignUpChef from "./Components/SignUpJefeCocina";
import MenuDesayuno from "./Components/MenuDesayuno";
import MenuCena from "./Components/MenuCena";
import NavbarFood from "./Components/NavbarFood";

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" render={()=> <Navbar/>} />
        <Route exact path="/NavbarFood" render={() => <NavbarFood/>} />
        <Route exact path="/Meseros" render={() => <SignUpWaiters/>} />
        <Route exact path="/Chef" render={() => <SignUpChef/>} />
        <Route exact path="/MenuDesayuno" render={() => <MenuDesayuno/> } />
        <Route exact path="/MenuCena" render={() => <MenuCena/>} />
      </div>
    </BrowserRouter>
  );
  
};

export default App;
