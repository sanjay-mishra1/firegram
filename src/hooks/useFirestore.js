import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
const useFirestore = (collection) => {
  const uid = localStorage.getItem("uid");
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection("Users")
      .doc(uid)
      .collection("images")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection, uid]);
  return { docs };
};
export default useFirestore;
