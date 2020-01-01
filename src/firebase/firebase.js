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


// //CREATING DATABASE
// database.ref()
//   .set({
//     //set helps to write to our database
//     name: "Emmanuel",
//     country: {
//       city: 'Ghana',
//       school: 'KNUST',
//       life: {
//         married: false
//       }
//     }
//   }).then(() => {
//     console.log('db saved')
//   }).catch((e) => {
//     console.log(e)
//   }); //This get to the root of our database; //This gives all database features CRUD




//REMOVE

// const dataToRemove = database.ref('name');
// dataToRemove.remove().then(() => {
//   console.log('Data removed')
// }).catch((e) => {
//   console.log('Error found when removing', e)
// })


//UPDATE DATA

//for update you can add different property to it
//You can also delete by setting a property value to null

//You need to provide and object to the function
// database.ref().update({
//   country: {
//     city: 'CHINA',
//     life: {
//       married: 'NOOOOO'
//     }
//   },
//   name: 'ATOM'
// }).then(() => {
//   console.log('UPDATED')
// }).catch((e) => {
//   console.log('Error occure', e)
// })


//FETCHING DATA

//You need to pass event type to once, example 'value'
//You can pass any specfic data you want to fetch to ref()
//once runs only once, when our data updated it won't get notifiy



// database.ref().once('value').then((snapsot) => {
//   //.val() is a function use to extract the actual data

//   const data = snapsot.val()
//   console.log(data)

// }).catch((e) => {
//   console.log(e)
// })


//METHOD 2 using on

//This is the better way of fetching data but one key point is we don't ptovide a promise to it insteacd we provide a callback as a second value



database.ref().on('value', (snapshot) => {
  console.log(snapshot.val())
})

