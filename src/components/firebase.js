// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCkTLi9oik6JWvkDyWpI_5l3nZi0PnFWpM",
    authDomain: "skillsconnect-3ce81.firebaseapp.com",
    databaseURL: "https://skillsconnect-3ce81.firebaseio.com",
    projectId: "skillsconnect-3ce81",
    storageBucket: "skillsconnect-3ce81.appspot.com",
    messagingSenderId: "1060732567824",
    appId: "1:1060732567824:web:1f0e0fd0a32ba017f46595",
    measurementId: "G-NP3LQ5YC1L"
};

firebase.initializeApp(firebaseConfig);
export default firebase;