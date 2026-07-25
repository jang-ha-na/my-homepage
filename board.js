import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const postList = document.getElementById("postList");

async function loadPosts() {
  const querySnapshot = await getDocs(collection(db, "posts"));

  querySnapshot.forEach((doc) => {
    const post = doc.data();

    postList.innerHTML += `
      <div class="card">
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      </div>
    `;
  });
}

loadPosts();
