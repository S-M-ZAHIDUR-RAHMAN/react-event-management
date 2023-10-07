// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMtGhxujrEk5EE83q7J1_vtI6RdtDMyzo",
  authDomain: "react-event-management-7fad6.firebaseapp.com",
  projectId: "react-event-management-7fad6",
  storageBucket: "react-event-management-7fad6.appspot.com",
  messagingSenderId: "333851196245",
  appId: "1:333851196245:web:af33c7698dd3d04a5a4ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;