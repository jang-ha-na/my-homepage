import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const postList = document.getElementById("postList");

async function loadPosts() {

    const snapshot = await getDocs(collection(db, "posts"));

    postList.innerHTML = "";

    snapshot.forEach((doc) => {

        const post = doc.data();

        const date = post.createdAt
            ? post.createdAt.toDate().toLocaleDateString("ko-KR")
            : "";

        const preview =
            post.content.length > 80
                ? post.content.substring(0, 80) + "..."
                : post.content;

        postList.innerHTML += `
        <div class="card">

            <h3>
                <a href="view.html?id=${doc.id}">
                    ${post.title}
                </a>
            </h3>

            <p><strong>👤 ${post.writer ?? "익명"}</strong></p>

            <p>📅 ${date}</p>

            <p>${preview}</p>

        </div>
        `;

    });

}

loadPosts();
