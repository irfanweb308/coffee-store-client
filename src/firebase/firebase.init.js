// Import the functions you need from the SDKs you needf
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationd
const firebaseConfig = {
  apiKey: "AIzaSyCpNFt6DR4WBTEEin6rXhxHM-2iW0dy-Rs",
  authDomain: "coffee-store-app-a2b18.firebaseapp.com",
  projectId: "coffee-store-app-a2b18",
  storageBucket: "coffee-store-app-a2b18.firebasestorage.app",
  messagingSenderId: "536727654187",
  appId: "1:536727654187:web:192602ea1ae9fe5f6fff6e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);