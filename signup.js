import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const btn = document.getElementById("signupBtn");

btn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("회원가입이 완료되었습니다!");
    location.href = "login.html";
  } catch (e) {
    alert("회원가입 실패: " + e.message);
  }
});
const darkBtn = document.getElementById("darkBtn");

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}
