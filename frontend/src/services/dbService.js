import { db } from "../firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase"; // your initialized storage

export async function getPatterns() {
  const snapshot = await getDocs(collection(db, "patterns"));

  const patterns = await Promise.all(
    snapshot.docs.map(async doc => {
      const data = doc.data();
      let url = data.url;

      // If it's a storage path, convert it to a usable download URL
      if (url.startsWith("gs://")) {
        // Corrected line: replace with your actual storage bucket URL
        const storageRef = ref(storage, url.replace("gs://motherland-coffee.appspot.com/", ""));
        url = await getDownloadURL(storageRef);
      }

      return {
        id: doc.id,
        name: data.name,
        url: url
      };
    })
  );

  return patterns;
}

export async function saveStickerData(data) {
  return await addDoc(collection(db, "stickers"), data);
}