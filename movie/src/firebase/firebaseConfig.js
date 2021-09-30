import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCPFutgzzdSZ7gPbXVAyPRVjfo62xawYa0",
  authDomain: "movie-33cae.firebaseapp.com",
  projectId: "movie-33cae",
  storageBucket: "movie-33cae.appspot.com",
  messagingSenderId: "627470068461",
  appId: "1:627470068461:web:e8c3214cc5dd4b74163ae4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

