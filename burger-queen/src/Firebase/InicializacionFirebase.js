import React from "react";
import * as firebase from 'firebase'


const config = {
        apiKey: "AIzaSyAyWtbEQlNhTLYbVxq8rGY2PKav7UOJl0Y",
        authDomain: "burguerqueen1-be3a3.firebaseapp.com",
        databaseURL: "https://burguerqueen1-be3a3.firebaseio.com",
        projectId: "burguerqueen1-be3a3",
        storageBucket: "burguerqueen1-be3a3.appspot.com",
        messagingSenderId: "688371913645",
        appId: "1:688371913645:web:179fac4b35000953"
}
firebase.initializeApp(config);

export default firebase;
