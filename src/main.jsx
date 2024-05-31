import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmfzSVPS1Cog7b31eFKZgngB64JadNC7o",
  authDomain: "amlujos-bd.firebaseapp.com",
  projectId: "amlujos-bd",
  storageBucket: "amlujos-bd.appspot.com",
  messagingSenderId: "53525955837",
  appId: "1:53525955837:web:07193bdca78c06f33eaa94"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
