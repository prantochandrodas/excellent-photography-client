// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvnFEYwEq8n3iIfgroa7sRKdvoXjbz3Z8",
  authDomain: "excellent-photography-client.firebaseapp.com",
  projectId: "excellent-photography-client",
  storageBucket: "excellent-photography-client.appspot.com",
  messagingSenderId: "9184685233",
  appId: "1:9184685233:web:030dc0b270012d7a8c8690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;