// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkgki-dJQetm4I_3QmggQ1p2ysa6ZUeaY",
  authDomain: "isaimamehh.firebaseapp.com",
  projectId: "isaimamehh",
  storageBucket: "isaimamehh.firebasestorage.app",
  messagingSenderId: "606354023584",
  appId: "1:606354023584:web:dfb7348f758163637795c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const __AUTH = getAuth(app)
export const __DB = getFirestore(app)