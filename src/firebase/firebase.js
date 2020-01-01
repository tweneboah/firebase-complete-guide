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
//When creating a database you can pass the name of the database to ref, if it's not there it will create it by that name
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



// database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// })

// //This is use to stop subscribing from updating
// database.ref().off()



//ARRAY DATABASE IN FIREBASE

//firebase don't support arrays
//Because of that we we will use push method which randomly creats id for each of our data

// database.ref('notes').push({
//   title: 'Go Home 2',
//   body: 'Studying 2'
// })


//FETCHING ARRAY DATA

//When retrieving array of data from firebase it returns as an object so to convert to array with proper id we will use a method on snapshot call forEach()

// database.ref('notes').once('value').then((snapshot) => {

//   const notes = []
//   snapshot.forEach((childSnapshot) => {
//     //since firebase don't automatically provide keys/id we have to do that by ourselvs by creating an object and assign our on key and then spread the rest of the data
//     notes.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(notes)
// })


//USING ON

// database.ref('notes').on('value', (snapshot) => {
//   const notes2 = []

//   snapshot.forEach((childSnapshot) => {
//     notes2.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })
//   console.log(notes2)
// })


//EVENTS

//1. child_remove(): this fires when a data is removed

//This will render the id and the content of the deleted data
// database.ref('notes').on('child_moved', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('notes').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });

// database.ref('notes').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// });




//FIREBASE WITH REDUX/REACT

//Component shouldn't be aware of where the data is coming from



export {
  firebase,
  database
}




import database from '../firebase/firebasePromise';

//create a new database
//============================


// database.ref('notes').push({
//   description: '', //form fields
//   body: '',
//   title: ''
// }).then((dataToBeCreated) => {
//  return {
//    id: dataToBeCreated.key,
//    ...dataToBeCreated
//  }
// }).catch(() => {

// });


//FETCHING DATA
//=======================


//Use componentDidMount


// componentDidMount() {
//   // database.ref('notes').on('value', (snapshot) => {
// //   const notes2 = []

// //   snapshot.forEach((childSnapshot) => {
// //     notes2.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     })
// //   })
// //   console.log(notes2)
// // })
// }

//REMOVING DATA
//========================

//You need an id and a fuction where to get the id


const remeveNote = (id) => {
  return database.ref(`notes/${id}`).remove().then(() => {
    console.log(`Data removed`)
  }).catch((e) => {
    console.log(`Error occured`)
  })
}



//UPDATE
//=======================

//This requires the id and the object to update

const updateNote = (id, dataTobeUpdated) => {
  return database.ref(`notes/${id}`).update(dataTobeUpdated).then(() => {

  }).catch(() => {

  })
}