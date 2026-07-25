import { auth, db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const btn = document.getElementById("writeBtn");

btn.addEventListener("click", async () => {
  const user = auth.currentUser;

  if (!user) {
    alert("로그인이 필요합니다.");
    return;
  }

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  try {
    await addDoc(collection(db, "posts"), {
      title,
      content,
      writer: user.email,
      uid: user.uid,
      createdAt: serverTimestamp()
    });

    alert("글이 등록되었습니다.");
    location.href = "board.html";
  } catch (e) {
    alert(e.message);
  }
});
