// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeAuuX3ip1ot0lHnnW5hvzuwXACvRoJFg",
  authDomain: "myshoppingapp-3093d.firebaseapp.com",
  projectId: "myshoppingapp-3093d",
  storageBucket: "myshoppingapp-3093d.appspot.com",
  messagingSenderId: "1025877151230",
  appId: "1:1025877151230:web:2b25699ccd888d563684af"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Google Sign In
const provider = new GoogleAuthProvider();



export {auth, app, provider} 