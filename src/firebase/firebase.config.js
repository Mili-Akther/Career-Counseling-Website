// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfIfeBteb-M21JFMQFIHYkjZjylrPdmoc",
  authDomain: "career-counseling-websit-91461.firebaseapp.com",
  projectId: "career-counseling-websit-91461",
  storageBucket: "career-counseling-websit-91461.firebasestorage.app",
  messagingSenderId: "868172426203",
  appId: "1:868172426203:web:d172fa58244c547f2515fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
export default app;  