// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyASxZFSdSCHNvwONO5fe4k1Oq7PIQddU04",
  authDomain: "prayer-time-b6c64.firebaseapp.com",
  projectId: "prayer-time-b6c64",
  storageBucket: "prayer-time-b6c64.appspot.com",
  messagingSenderId: "911186975355",
  appId: "1:911186975355:web:3b9eab8f140a154b37a0de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
// export const db = getFirestore(app)