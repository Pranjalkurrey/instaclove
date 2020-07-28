import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDPn9-WsPMQ1PbiTStlvehMg8xh4u2budU",
  authDomain: "instagram-clone-react-2f5f1.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-2f5f1.firebaseio.com",
  projectId: "instagram-clone-react-2f5f1",
  storageBucket: "instagram-clone-react-2f5f1.appspot.com",
  messagingSenderId: "1028365394305",
  appId: "1:1028365394305:web:19dd42f086c584bfe98880",
  measurementId: "G-JG0NP1BZGF",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
