import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDPjahrQCUyVnHNJfYCj1JQDOfhBGLjdyo",
  authDomain: "firegram-70bc9.firebaseapp.com",
  databaseURL: "https://firegram-70bc9.firebaseio.com",
  projectId: "firegram-70bc9",
  storageBucket: "firegram-70bc9.appspot.com",
  messagingSenderId: "98198987587",
  appId: "1:98198987587:web:077d91051b6deaaf5845f6",
  measurementId: "G-KVK5KR252Q",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
const projectAuth = firebase.auth();
var uid = localStorage.getItem("uid");
if (!uid) {
  uid = "";
}
console.log("Uid", "" + uid);
export { projectStorage, projectFirestore, timestamp, projectAuth, uid };
