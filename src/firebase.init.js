// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX1bputgMchbTHxinA51UBBfuMGGuwu9I",
    authDomain: "react-dental-project.firebaseapp.com",
    projectId: "react-dental-project",
    storageBucket: "react-dental-project.appspot.com",
    messagingSenderId: "117913883032",
    appId: "1:117913883032:web:9644d8210877068c8c5bed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;