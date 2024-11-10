// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyABMbSNO7GHnfVPRh_Ygf7hVAfNHRyZcjI",
    authDomain: "scam-5c513.firebaseapp.com",
    databaseURL: "https://scam-5c513-default-rtdb.firebaseio.com",
    projectId: "scam-5c513",
    storageBucket: "scam-5c513.firebasestorage.app",
    messagingSenderId: "803393279257",
    appId: "1:803393279257:web:a2a5e50eb0dd4a1e9a6188",
    measurementId: "G-0T39NK3MX8"
};

const app = initializeApp(firebaseConfig);
import {
    getDatabase, ref, child, get, set, update, remove,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
const database = getDatabase();

export { database, get, child, ref, set, update, remove }