import { db, auth } from "./firebase.js";

import {
  doc,
  getDoc,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const params = new URLSearchParams(location.search);
const id = params.get("id");

const snap = await getDoc(doc(db, "posts", id));

if (snap.exists()) {

    const data = snap.data();

    document.getElementById("title").textContent = data.title;
    document.getElementById("writer").textContent = data.writer;
    document.getElementById("content").textContent = data.content;

    if(data.createdAt){
        document.getElementById("date").textContent =
            data.createdAt.toDate().toLocaleString();
    }

    const user = auth.currentUser;

    if(!user || user.uid !== data.uid){
        document.getElementById("editBtn").style.display="none";
        document.getElementById("deleteBtn").style.display="none";
    }

    document.getElementById("deleteBtn").onclick = async ()=>{

        if(confirm("삭제하시겠습니까?")){
            await deleteDoc(doc(db,"posts",id));
            alert("삭제되었습니다.");
            location.href="board.html";
        }

    };

}
