
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwJKEqud1cxaOAPQMmOKUF4kJ3RGsUDik",
    authDomain: "socialmediaapp-34e35.firebaseapp.com",
    projectId: "socialmediaapp-34e35",
    storageBucket: "socialmediaapp-34e35.firebasestorage.app",
    messagingSenderId: "231731246253",
    appId: "1:231731246253:web:f81f1b8f35348fe627c224",
    measurementId: "G-JQYJWLG7XR"
  };

  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);