import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBdlhfhgp4T19CZd0nhURUw55UxwSg1hOs",
  authDomain: "house-marketplace-app-2ed87.firebaseapp.com",
  projectId: "house-marketplace-app-2ed87",
  storageBucket: "house-marketplace-app-2ed87.appspot.com",
  messagingSenderId: "792525454727",
  appId: "1:792525454727:web:88e9d5e7cf5297ad246722"
};

initializeApp(firebaseConfig);
export const db = getFirestore()