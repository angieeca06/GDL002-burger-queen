import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Components/Button";

const buttons = [1,2,3,4,5];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {buttons.map((button, index) => <Button name={"GDL" + index} color={"background-" + index} key={index}/>)}
    </div>
      );
};

export default App;
