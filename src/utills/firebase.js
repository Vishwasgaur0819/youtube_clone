// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL5P-w9PFW10joFsGXEDgExdhfp3lhQL8",
  authDomain: "testfire-c1b03.firebaseapp.com",
  projectId: "testfire-c1b03",
  storageBucket: "testfire-c1b03.appspot.com",
  messagingSenderId: "970434886824",
  appId: "1:970434886824:web:5bd40b167ba13ed81a569d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);