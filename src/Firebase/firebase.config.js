// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq3LSNXoJhhd6o5KreSrEHnAcdGsxj-64",
  authDomain: "bangla-bites.firebaseapp.com",
  projectId: "bangla-bites",
  storageBucket: "bangla-bites.appspot.com",
  messagingSenderId: "537781640001",
  appId: "1:537781640001:web:86256537688544cbef1fc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;