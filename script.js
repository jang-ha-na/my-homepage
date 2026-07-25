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
