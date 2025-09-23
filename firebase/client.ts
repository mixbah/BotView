import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your client-side Firebase configuration. This is safe to expose.
const firebaseConfig = {
  apiKey: "AIzaSyAXPyBWKXziXa3fxhTQWkvzbeG9hHpZ9J4",
  authDomain: "botview-81676.firebaseapp.com",
  projectId: "botview-81676",
  storageBucket: "botview-81676.firebasestorage.app",
  messagingSenderId: "694647101644",
  appId: "1:694647101644:web:ad4d119ad8d0ba30db8a69",
  measurementId: "G-FRNSG98HQK"
};

// Initialize the client-side Firebase app.
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export the client-side Firebase Auth and Firestore instances.
export const auth = getAuth(app);
export const db = getFirestore(app);