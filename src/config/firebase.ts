// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {  getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// import {} from 'fire'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTFycp9xjL8GJuswBolaEljqt6GIGNiZs",
  authDomain: "prayer-times-a7f75.firebaseapp.com",
  projectId: "prayer-times-a7f75",
  storageBucket: "prayer-times-a7f75.appspot.com",
  messagingSenderId: "521583185286",
  appId: "1:521583185286:web:310ddbdfc1072bf8707007",
  measurementId: "G-NSWC7WHTPE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const facebookProvider = new FacebookAuthProvider()
export const googleProvider = new GoogleAuthProvider()