import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

document.querySelectorAll("#menu a[href^='#']").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

const darkBtn = document.getElementById("darkBtn");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

if (darkBtn) {
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

cards.forEach(card=>{
    observer.observe(card);
});

const loginLink = document.querySelector('a[href="login.html"]');

onAuthStateChanged(auth, (user) => {
    if (!loginLink) return;

    if (user) {
        loginLink.textContent = "로그아웃";
        loginLink.href = "#";

        loginLink.onclick = async (e) => {
            e.preventDefault();
            await signOut(auth);
            location.reload();
        };
    } else {
        loginLink.textContent = "로그인";
        loginLink.href = "login.html";
        loginLink.onclick = null;
    }
});
