// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7EOid5KLjYlKsT49ga0RE-_8g66Aect4",
  authDomain: "instagram-clone-71d2f.firebaseapp.com",
  projectId: "instagram-clone-71d2f",
  storageBucket: "instagram-clone-71d2f.appspot.com",
  messagingSenderId: "474851670300",
  appId: "1:474851670300:web:9bb9365b4ee08a739062d9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(); 
const storage = getStorage();

export {app, db, storage};