import firebase from 'firebase/app';
import 'firebase/functions';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAX-0dhyA1iskPzGxNv1BDfvUS_PU3s9UE",
    authDomain: "jillo-woche.firebaseapp.com",
    databaseURL: "https://jillo-woche.firebaseio.com",
    projectId: "jillo-woche",
    storageBucket: "",
    messagingSenderId: "1010295981202",
    appId: "1:1010295981202:web:f549968ce2c43a1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

export { firebase, db };