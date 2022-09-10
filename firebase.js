import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBgzLlY6S6TjqvLlWjqvdAiO2rPUQ32QyY",
  authDomain: "auth-423dc.firebaseapp.com",
  projectId: "auth-423dc",
  storageBucket: "auth-423dc.appspot.com",
  messagingSenderId: "978425697677",
  appId: "1:978425697677:web:f31b7c7f1b9c2031f459c4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db }
