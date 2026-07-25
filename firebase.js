import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  await addDoc(collection(db, "posts"), {
    title,
    content,
    createdAt: new Date()
  });

  alert("저장되었습니다!");
  location.href = "board.html";
});
