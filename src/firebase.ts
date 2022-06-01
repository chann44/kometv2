import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKjQD5QoXydK8y3Y_h1Fr1qkj6jkGBQTE",
  authDomain: "kometrefral.firebaseapp.com",
  projectId: "kometrefral",
  storageBucket: "kometrefral.appspot.com",
  messagingSenderId: "435912251019",
  appId: "1:435912251019:web:17c8624d0fd53902f5668e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

export const db = getFirestore(app);
