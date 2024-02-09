import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_KEY,
    authDomain: "logistics-dashboard-47b13.firebaseapp.com",
    projectId: "logistics-dashboard-47b13",
    storageBucket: "logistics-dashboard-47b13.appspot.com",
    messagingSenderId: "856986825915",
    appId: "1:856986825915:web:860a4221c4d9b8bbe9e59e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
