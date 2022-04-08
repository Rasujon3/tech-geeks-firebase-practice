import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDxyPy714cPEBLk6Dq349q_xoN2grQ5ZbA",
  authDomain: "tech-geeks-ccabc.firebaseapp.com",
  projectId: "tech-geeks-ccabc",
  storageBucket: "tech-geeks-ccabc.appspot.com",
  messagingSenderId: "748320032188",
  appId: "1:748320032188:web:9deaa9180a95d6dae217b9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
