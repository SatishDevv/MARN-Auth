// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "marn-auth-338aa.firebaseapp.com",
  projectId: "marn-auth-338aa",
  storageBucket: "marn-auth-338aa.appspot.com",
  messagingSenderId: "330479870444",
  appId: "1:330479870444:web:ea41e0a1eec5da06bb60c9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);