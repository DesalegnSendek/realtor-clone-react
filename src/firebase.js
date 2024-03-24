import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBuGBFwisvnVHsnEwQGMjgDcB1vMt9X-_k",
  authDomain: "home-real-state-project.firebaseapp.com",
  projectId: "home-real-state-project",
  storageBucket: "home-real-state-project.appspot.com",
  messagingSenderId: "841954660907",
  appId: "1:841954660907:web:62bf575b34d15a0278d06e",
  measurementId: "G-EL55G7DYFW"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
