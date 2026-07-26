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

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}
