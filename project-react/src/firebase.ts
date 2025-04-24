// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2L3TJ8SsCXTyy4L0RNdaY4ZY0C1Ak5XA",
  authDomain: "project-react-e0708.firebaseapp.com",
  projectId: "project-react-e0708",
  storageBucket: "project-react-e0708.firebasestorage.app",
  messagingSenderId: "445380458811",
  appId: "1:445380458811:web:53f0a3baac9e2237839f1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);


