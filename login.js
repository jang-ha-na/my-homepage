import { auth } from "./firebase.js";
import {
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const btn = document.getElementById("loginBtn");

btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("로그인 성공!");
    location.href = "index.html";
  } catch (e) {
    alert("로그인 실패: " + e.message);
  }
});
