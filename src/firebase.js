import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
// import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfaRGBr25Nd4lH1JxU_dyzA9LGhU-0ZjU",
    authDomain: "challenge-fc327.firebaseapp.com",
    projectId: "challenge-fc327",
    storageBucket: "challenge-fc327.appspot.com",
    messagingSenderId: "325330051019",
    appId: "1:325330051019:web:5686abde06c582b2bfa04e"
  };
//use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //Use these for db & Auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}