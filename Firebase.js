// import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
    apiKey: "AIzaSyASqxP7s7i2TbDgTDgkJVonf-p0a9DFljg",
    authDomain: "costumers-33ac6.firebaseapp.com",
    projectId: "costumers-33ac6",
    storageBucket: "costumers-33ac6.appspot.com",
    messagingSenderId: "487974901375",
    appId: "1:487974901375:web:b29a5c27d5c1a68bdc914a"
};




const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



export { auth, db };