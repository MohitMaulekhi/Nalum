
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKgucSnx0NtfCWQUXBY9tjpTniwE5NGnk",
  authDomain: "nalum-test.firebaseapp.com",
  projectId: "nalum-test",
  storageBucket: "nalum-test.firebasestorage.app",
  messagingSenderId: "413095791824",
  appId: "1:413095791824:web:d59621a6bf8eef3bcce2d5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);