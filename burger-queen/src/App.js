import React from 'react';
import './App.css';
import Button from "./Components/Button";
import SignUp from "./Components/Registro";

// const buttons = [1,2,3];

function App() {
  return (
    <div className="App">
      <Button name={"Meserxs"} color={"background-red"} key={"meserxs"}/>
      <Button name={"Jefe de cocina"} color={"background-red"} key={"Jefe de cocina"}/>
    </div>
      );
};

export default App;
