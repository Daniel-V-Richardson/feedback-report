
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALuAsxIhGzTQ7A1Yup2ADJtcfq6hQEstM",
  authDomain: "csefeedback.firebaseapp.com",
  projectId: "csefeedback",
  storageBucket: "csefeedback.appspot.com",
  messagingSenderId: "804271808258",
  appId: "1:804271808258:web:a1c058ed60ad1816e42c1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);