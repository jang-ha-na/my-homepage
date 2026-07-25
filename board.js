
import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const postList = document.getElementById("postList");

async function loadPosts() {

  try {

    const snapshot = await getDocs(collection(db, "posts"));

    console.log("문서 개수:", snapshot.size);

    postList.innerHTML = "";

    snapshot.forEach((doc) => {

      const post = doc.data();

      postList.innerHTML += `
        <div class="card">
          <h3>
            <a href="view.html?id=${doc.id}">
              ${post.title}
            </a>
          </h3>

          <p>${post.content}</p>
        </div>
      `
