// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore , collection , addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfo64k-p1YAeogKBniEFX-vZeG2raTAuo",
  authDomain: "portfolio-e9a4d.firebaseapp.com",
  projectId: "portfolio-e9a4d",
  storageBucket: "portfolio-e9a4d.firebasestorage.app",
  messagingSenderId: "468377891754",
  appId: "1:468377891754:web:d9ffb66083842e74a071d3",
  measurementId: "G-MVRQEGCPKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {analytics, db , collection , addDoc};