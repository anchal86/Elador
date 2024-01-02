// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqGSqrAnbXEQ3dIyot3Kd_GeG-cilCnPQ",
  authDomain: "elador-91bc3.firebaseapp.com",
  projectId: "elador-91bc3",
  storageBucket: "elador-91bc3.appspot.com",
  messagingSenderId: "855343919229",
  appId: "1:855343919229:web:0b83a668aaaad004a4c114"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()