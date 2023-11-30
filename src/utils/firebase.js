// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blogs-and-bits-f50e8.firebaseapp.com",
  projectId: "blogs-and-bits-f50e8",
  storageBucket: "blogs-and-bits-f50e8.appspot.com",
  messagingSenderId: "756426682264",
  appId: "1:756426682264:web:4198d29f35aa287b7d85ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
