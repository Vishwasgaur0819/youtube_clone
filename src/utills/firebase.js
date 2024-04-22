// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfXZ5XWwryHoqeKN0NDR25o0qGBJMXycQ",
    authDomain: "getintofirebase.firebaseapp.com",
    projectId: "getintofirebase",
    storageBucket: "getintofirebase.appspot.com",
    messagingSenderId: "448857847414",
    appId: "1:448857847414:web:947992e8f3069b71e91157",
    measurementId: "G-TP426TMFJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authUser = getAuth();