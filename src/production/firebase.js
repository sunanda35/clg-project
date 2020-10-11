import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({                            
    apiKey: "AIzaSyDF3cUZY4C3ohl4tL8ysd1MQoQs_dPS6Jw",
    authDomain: "clg-project-e8652.firebaseapp.com",
    databaseURL: "https://clg-project-e8652.firebaseio.com",
    projectId: "clg-project-e8652",
    storageBucket: "clg-project-e8652.appspot.com",
    messagingSenderId: "1072787593387",
    appId: "1:1072787593387:web:db775e045b715c8403ffee",
    measurementId: "G-KVHS1XDJK3"
  });                             //Here everythig in this third bracket just connect with my firebase console

  const db = firebaseApp.firestore();           //Initialize to query data
  const auth = firebase.auth();                 //Initialize for authentication 
  const storage = firebase.storage();           //Initialize to use firebase storage
  export {db, auth, storage}    //Every initialize data exported