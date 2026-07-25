// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRLXq0S5k6-v9LclQm8hKiLGPY-szYve4",
  authDomain: "hanaprofile.firebaseapp.com",
  projectId: "hanaprofile",
  storageBucket: "hanaprofile.firebasestorage.app",
  messagingSenderId: "511043861506",
  appId: "1:511043861506:web:037501a7c9c26fc19fbb1b",
  measurementId: "G-QP6R4KBPN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
