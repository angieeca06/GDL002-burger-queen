import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUpWaiters from "./Components/SignUpMeseros";
import Menu from "./Components/Menu"

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar title="Burger Queen"/>
        <Route exact path="/Meseros" render={() => <SignUpWaiters/>} />
        <Route exact path="/Menu" render={() => <Menu/>} />
      </div>
    </BrowserRouter>
  );
  
};

export default App;
