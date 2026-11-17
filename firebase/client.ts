// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_jP9sKgUp9VAs-WLwBkFtBhD5629nbSg",
  authDomain: "prepwise-b3eb0.firebaseapp.com",
  projectId: "prepwise-b3eb0",
  storageBucket: "prepwise-b3eb0.firebasestorage.app",
  messagingSenderId: "846168331248",
  appId: "1:846168331248:web:c663f13e38360552970335",
  measurementId: "G-G0WRFX83FT",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
