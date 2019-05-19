import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCAw4pMi7Ov-22QxyfCkkg1HOVeNCDfkas",
    authDomain: "innovidrt.firebaseapp.com",
    databaseURL: "https://innovidrt.firebaseio.com",
    projectId: "innovidrt",
    storageBucket: "innovidrt.appspot.com",
    messagingSenderId: "242295146684",
    appId: "1:242295146684:web:42d3e0953d327152"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

export default firebase;
