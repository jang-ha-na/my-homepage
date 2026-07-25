const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const darkBtn = document.getElementById("darkBtn");
const topBtn = document.getElementById("topBtn");

// 햄버거 메뉴
if(menuBtn){
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("show");
    });
}

// 다크모드
if(darkBtn){
    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        darkBtn.textContent =
            document.body.classList.contains("dark")
            ? "☀️"
            : "🌙";
    });
}

// 맨 위 버튼
window.addEventListener("scroll", () => {
    if(topBtn){
        topBtn.style.display =
            window.scrollY > 300 ? "block" : "none";
    }
});

if(topBtn){
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    });
}
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});
