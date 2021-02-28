import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCRTbXq6H0lJtd9LaMlJmmoPuE6jOR414M",
    authDomain: "project-gradibus.firebaseapp.com",
    projectId: "project-gradibus",
    storageBucket: "project-gradibus.appspot.com",
    messagingSenderId: "216915091601",
    appId: "1:216915091601:web:8dd9e0d41ed1438675df30",
    measurementId: "G-N85JEJXYZ1"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;