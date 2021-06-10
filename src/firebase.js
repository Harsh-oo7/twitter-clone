import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDp15QSdxP0U2eRylVW6dncMJ0YJcH8VXw",
    authDomain: "twitter-clone-hk22.firebaseapp.com",
    projectId: "twitter-clone-hk22",
    storageBucket: "twitter-clone-hk22.appspot.com",
    messagingSenderId: "882852363425",
    appId: "1:882852363425:web:8ba802aa805d7fef0a04e0",
    measurementId: "G-5DE7R7KBXP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;