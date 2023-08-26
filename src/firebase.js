import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const API_KEY=process.env.REACT_APP_API_KEY
const firebaseConfig = {
    apiKey:API_KEY,
    authDomain: "airport-b01ad.firebaseapp.com",
    projectId: "airport-b01ad",
    storageBucket: "airport-b01ad.appspot.com",
    messagingSenderId: "887733865978",
    appId: "1:887733865978:web:21c38641fa8a0628842843"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);