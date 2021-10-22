import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqLLLjXzPQet53tUSy9mOnZkXMmmLibDw",
  authDomain: "authtest-b8711.firebaseapp.com",
  projectId: "authtest-b8711",
  storageBucket: "authtest-b8711.appspot.com",
  messagingSenderId: "71579316775",
  appId: "1:71579316775:web:f713cca729afc646489402",
  measurementId: "G-FQ7M19SCCC"
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }
  return null;
}
