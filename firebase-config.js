// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    
  𝐀𝐃𝐃 𝐘𝐎𝐔𝐑 𝐅𝐈𝐑𝐄𝐁𝐀𝐒𝐄 𝐒𝐃𝐊
  const firebaseConfig = {
  apiKey: "AIzaSyBurSxT07VxPg07u4B0Gg17dBFFq8jk2rU",
  authDomain: "thenepdon.firebaseapp.com",
  databaseURL: "https://thenepdon-default-rtdb.firebaseio.com",
  projectId: "thenepdon",
  storageBucket: "thenepdon.firebasestorage.app",
  messagingSenderId: "1065359940673",
  appId: "1:1065359940673:web:d47a0caa9337486ec03ac0",
  measurementId: "G-X2K1XB6YS4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };