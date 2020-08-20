import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCiffa2FsO0r-EHB95VXxh-PFVxw6dGPm8",
    authDomain: "instagram-clone-react-b3f77.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-b3f77.firebaseio.com",
    projectId: "instagram-clone-react-b3f77",
    storageBucket: "instagram-clone-react-b3f77.appspot.com",
    messagingSenderId: "1077260748429",
    appId: "1:1077260748429:web:2d4a4898e5e9d206ad84c4",
    measurementId: "G-HRJJ7CNEBM"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};