import { useEffect, useState } from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDDswkjYH_KSGVRBIkAqMurAJQoE2ayEQ",
  authDomain: "athena-b7ab1.firebaseapp.com",
  projectId: "athena-b7ab1",
  storageBucket: "athena-b7ab1.appspot.com",
  messagingSenderId: "819606545585",
  appId: "1:819606545585:web:7cc0778860672d18926e90",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "comments")).then((querySnapshot) => {
      let comments = [];

      querySnapshot.forEach((doc) => {
        comments.push(doc.data());
      });

      setComments(comments);
    });
  }, []);

  return (
    <>
      Comments:
      {comments.map((comment) => (
        <div key={comment.content}>{comment.content}</div>
      ))}
    </>
  );
}

export default App;
