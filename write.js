import { auth } from "./firebase.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

const saveBtn = document.getElementById("saveBtn");

onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("로그인 후 이용해주세요.");
    location.href = "login.html";
    return;
  }

  saveBtn.addEventListener("click", async () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    try {
      await addDoc(collection(db, "posts"), {
        title,
        content,
        writer: user.email,
        createdAt: new Date()
      });

      alert("게시글이 저장되었습니다!");
      location.href = "board.html";
    } catch (e) {
      alert("저장 실패: " + e.message);
    }
  });
});
