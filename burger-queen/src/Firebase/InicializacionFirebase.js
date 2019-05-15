import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCAr4rGXUKgfXvTPdJJfiqPIxjXCkUFL9o",
    authDomain: "burger-queen-16d82.firebaseapp.com",
    databaseURL: "https://burger-queen-16d82.firebaseio.com",
    projectId: "burger-queen-16d82",
    storageBucket: "burger-queen-16d82.appspot.com",
    messagingSenderId: "1079913154006",
    appId: "1:1079913154006:web:ff46b6b400809db2"
}
firebase.initializeApp(config)

