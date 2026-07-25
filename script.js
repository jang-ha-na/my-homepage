// 페이지가 열리면 부드럽게 나타나는 효과
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// 버튼 클릭 이벤트
const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", () => {
        alert("게시판 기능은 준비 중입니다. 😊");
    });
}

// 스크롤 시 카드 애니메이션
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";
    observer.observe(card);
});
