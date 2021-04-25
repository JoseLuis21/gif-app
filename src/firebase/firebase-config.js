import  firebase  from "firebase/app";    
import "firebase/firestore";
import "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPWxFud-iEAmc-9vuHZm5KvOevS9HP3tU",
    authDomain: "react-app-escalab.firebaseapp.com",
    projectId: "react-app-escalab",
    storageBucket: "react-app-escalab.appspot.com",
    messagingSenderId: "1041021507893",
    appId: "1:1041021507893:web:c491f07dc68338c77e147c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}