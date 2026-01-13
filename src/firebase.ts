import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0w-800l59tzST68KYgfNNLHtnMo0-KwM",
  authDomain: "matrimonioagocla.firebaseapp.com",
  projectId: "matrimonioagocla",
  storageBucket: "matrimonioagocla.firebasestorage.app",
  messagingSenderId: "338571759582",
  appId: "1:338571759582:web:502a8e5731da3785e7d74f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
