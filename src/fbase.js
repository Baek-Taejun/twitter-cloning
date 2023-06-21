import { initializeApp } from "firebase/app";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAa6TE4E5nZM8EOJG70xFc2A_G4KicYS9o",
  authDomain: "nwitter-9ec29.firebaseapp.com",
  projectId: "nwitter-9ec29",
  storageBucket: "nwitter-9ec29.appspot.com",
  messagingSenderId: "175006056512",
  appId: "1:175006056512:web:7f48880a36759f9dfe9fa5",
};

// export const firebase = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const authService = firebase.auth();
