
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTPRpb9C_5sVE9wfZV7TneYSCy3dxsi_Q",
  authDomain: "jetronixs-job-board.firebaseapp.com",
  projectId: "jetronixs-job-board",
  storageBucket: "jetronixs-job-board.firebasestorage.app",
  messagingSenderId: "555199028397",
  appId: "1:555199028397:web:49bcd59fb25c3841ab7a24",
  measurementId: "G-J36F2NC7CZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
