// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoJ-Sf2HvM1D86EMutXTjY4Suoq3QGNCM",
  authDomain: "instagram-clone-e1e30.firebaseapp.com",
  projectId: "instagram-clone-e1e30",
  storageBucket: "instagram-clone-e1e30.appspot.com",
  messagingSenderId: "821499402037",
  appId: "1:821499402037:web:decd3d727608b2e1af5e7c",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
