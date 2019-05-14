import React from 'react';
import {BrowserRouter} from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignUpWaiters from "./Components/SignUpMeseros"

function App() {
  return(
    <div className={"App"}>
      <SignUp/>
      <SignUpWaiters/>
    </div>
  );
  
};

export default App;
