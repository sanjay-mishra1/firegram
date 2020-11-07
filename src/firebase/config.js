import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "<project-api>",
  authDomain: "<project-name>.firebaseapp.com",
  databaseURL: "https://<project-name>.firebaseio.com",
  projectId: "<project-name>",
  storageBucket: "<project-name>.appspot.com",
  messagingSenderId: "msgid",
  appId: "<app-id>",
  measurementId: "",
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
