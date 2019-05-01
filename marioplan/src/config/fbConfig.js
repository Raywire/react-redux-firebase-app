import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
var config = {
    apiKey: "AIzaSyAem3yS2EHke7IAPAfgLXvIR2Aqhsc8dlA",
    authDomain: "marioplan-436d3.firebaseapp.com",
    databaseURL: "https://marioplan-436d3.firebaseio.com",
    projectId: "marioplan-436d3",
    storageBucket: "marioplan-436d3.appspot.com",
    messagingSenderId: "465012603585"
  };

  firebase.initializeApp(config);
  firebase.firestore();

  export default firebase;
  