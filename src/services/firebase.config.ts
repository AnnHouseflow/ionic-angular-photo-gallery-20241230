import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1HaS6XKVTETlPWy2ruh9Nbm-PgMTgWek",
  authDomain: "photo-gallery-20241230.firebaseapp.com",
  projectId: "photo-gallery-20241230",
  storageBucket: "photo-gallery-20241230.firebasestorage.app",
  messagingSenderId: "232759876254",
  appId: "1:232759876254:web:1f357bc7d70677ccea798f",
  measurementId: "G-0BX0X7KJ1S"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };