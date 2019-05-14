import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import SignUpWaiters from "./Components/SignUpMeseros"

function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <Navbar title="Burger Queen"/>
        <Route exact path="/Meseros" render={() => <SignUpWaiters/>} />
      </div>
    </BrowserRouter>
  );
  
};

export default App;
