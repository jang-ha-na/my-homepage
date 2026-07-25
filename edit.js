import { db } from "./firebase.js";

import {
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const title = document.getElementById("title");
const content = document.getElementById("content");
const saveBtn = document.getElementById("saveBtn");

// 기존 글 불러오기
const snap = await getDoc(doc(db, "posts", id));

if (snap.exists()) {
    const data = snap.data();

    title.value = data.title;
    content.value = data.content;
}

// 수정 저장
saveBtn.onclick = async () => {

    await updateDoc(doc(db, "posts", id), {
        title: title.value,
        content: content.value
    });

    alert("수정되었습니다.");

    location.href = `view.html?id=${id}`;
};
