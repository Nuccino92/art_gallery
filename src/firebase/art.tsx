import { database } from "./config";
import { getDocs, orderBy, query, collection } from "firebase/firestore";

// collection ref
const colRef = collection(database, "art");

const q = query(colRef, orderBy("author", "asc"));

// get collection data
export const art = () =>
  getDocs(q)
    .then((snapshot) => {
      let art: object[] | any = [];
      snapshot.docs.forEach((doc) => {
        art.push({ ...doc.data(), id: doc.id });
      });
      return art;
    })
    .catch((err) => {
      console.log(err.message);
    });
