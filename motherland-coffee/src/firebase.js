import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1LDCL_Zuh97YPZtaBXp8LCLRhQaDbUXE",
  authDomain: "motherland-coffee.firebaseapp.com",
  projectId: "motherland-coffee",
  storageBucket: "motherland-coffee.firebasestorage.app",
  messagingSenderId: "590486100853",
  appId: "1:590486100853:web:897b16e05f2e55c7a1d13c",
  measurementId: "G-BTSBW2S96G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const functions = getFunctions(app);
export const storage = getStorage(app);