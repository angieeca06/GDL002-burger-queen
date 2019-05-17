import React from "react";
import firebase from "./InicializacionFirebase";

class App extends Component {
    constructor () {
      super()
      this.state = { 
        Comida: [],
        Desayuno: [] 
      }
    }
  }

const nameRef = firebase.database().ref().child('object').child('name');
nameRef.on('value', snapshot => {
    this.setState({
      name: snapshot.val()
    })
  })