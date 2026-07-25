import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRLXq0S5k6-v9LclQm8hKiLGPY-szYve4",
  authDomain: "hanaprofile.firebaseapp.com",
  projectId: "hanaprofile",
  storageBucket: "hanaprofile.appspot.com",
  messagingSenderId: "511043861506",
  appId: "1:511043861506:web:037501a7c9c26fc19fbb1b",
  measurementId: "G-QP6R4KBPN0"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
