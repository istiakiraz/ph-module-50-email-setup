// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDQa4kiZN_KeMvZvcYP-EGqaA5RIX8YZ0",
  authDomain: "explor-email-pass-auth.firebaseapp.com",
  projectId: "explor-email-pass-auth",
  storageBucket: "explor-email-pass-auth.firebasestorage.app",
  messagingSenderId: "608461424975",
  appId: "1:608461424975:web:0d8d4cf7ec93573e085d3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);