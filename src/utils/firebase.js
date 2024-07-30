// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUwfBNdMp4Pk_o-nZorD60_1Suo50Zkik",
  authDomain: "netflixgpt-bcf5c.firebaseapp.com",
  projectId: "netflixgpt-bcf5c",
  storageBucket: "netflixgpt-bcf5c.appspot.com",
  messagingSenderId: "336168279496",
  appId: "1:336168279496:web:b4e6b463aabc37605834fd",
  measurementId: "G-DTR9S2Q5R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
