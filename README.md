## FIREBASE

```js
//CONNECT TO DATABASE

import * as firebase from "firebase"; //This grabs all the firebase methods

//CONNECT TO DATABASE
const firebaseConfig = {
  apiKey: "AIzaSyDL55S7bs4ZSykofpQ1qoSwDD448Q1Lu_o",
  authDomain: "fir-complete-guide.firebaseapp.com",
  databaseURL: "https://fir-complete-guide.firebaseio.com",
  projectId: "fir-complete-guide",
  storageBucket: "fir-complete-guide.appspot.com",
  messagingSenderId: "783169070870",
  appId: "1:783169070870:web:959e51966e5a23c0ed5237",
  measurementId: "G-60J988Q1XS",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database()


//CREATING DATABASE
database.ref()
  .set({
    //set helps to write to our database
    name: "Emmanuel",
    country: {
      city: 'Ghana',
      school: 'KNUST'
    }
  }); //This get to the root of our database; //This gives all database features CRUD

```