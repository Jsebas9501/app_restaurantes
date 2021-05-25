import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4pfBLXulmCVBD2KwUGd4ZSTFaYP2RUo",
  authDomain: "app-restaurants-206cb.firebaseapp.com",
  projectId: "app-restaurants-206cb",
  storageBucket: "app-restaurants-206cb.appspot.com",
  messagingSenderId: "48982650536",
  appId: "1:48982650536:web:a869fa98abbc68f5391c9d",
};
console.log(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
