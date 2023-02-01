// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, FacebookAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  
  apiKey: "AIzaSyD43i6IU3rjniSmMv4Zmmrhv_3pHI6bl5o",
  authDomain: "prayer-times-cd328.firebaseapp.com",
  projectId: "prayer-times-cd328",
  storageBucket: "prayer-times-cd328.appspot.com",
  messagingSenderId: "48447503288",
  appId: "1:48447503288:web:6affaaa1d5a9042c04ad4d",
  measurementId: "G-DXS7X39XD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const db = getFirestore(app);