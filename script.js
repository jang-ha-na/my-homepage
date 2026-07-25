import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.addEventListener("DOMContentLoaded", () => {
  const loginLink = document.getElementById("loginLink");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      loginLink.textContent = "로그아웃";
      loginLink.href = "#";

      loginLink.onclick = async (e) => {
        e.preventDefault();
        await signOut(auth);
        alert("로그아웃되었습니다.");
        location.reload();
      };
    }
  });
});

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("show");
});
