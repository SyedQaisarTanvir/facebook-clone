import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebase } from "firebase/database";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArUQ_bNkU8rYQdxnO9bqhViDt6BLehSsc",
  authDomain: "facebook-clone-88708.firebaseapp.com",
  projectId: "facebook-clone-88708",
  storageBucket: "facebook-clone-88708.appspot.com",
  messagingSenderId: "412473164222",
  appId: "1:412473164222:web:e27ecfad90d5688f9979ef",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export { auth, provider };
export default db;
