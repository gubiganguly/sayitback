// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAS7dOnMT63GsPIMncGH2iTBkx9qNdaQE",
  authDomain: "sayitback-c2670.firebaseapp.com",
  projectId: "sayitback-c2670",
  storageBucket: "sayitback-c2670.firebasestorage.app",
  messagingSenderId: "473515069692",
  appId: "1:473515069692:web:55c054ffb33eaab01d0779",
  measurementId: "G-3LPNNN0PFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };