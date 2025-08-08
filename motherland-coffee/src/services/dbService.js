import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getPatterns() {
  const snapshot = await getDocs(collection(db, "patterns"));
  return snapshot.docs.map(doc => doc.data().url);
}

export async function saveStickerData(data) {
  return await addDoc(collection(db, "stickers"), data);
}
