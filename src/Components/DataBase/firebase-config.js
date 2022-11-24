import { initializeApp } from "firebase/app";
import {getAuth,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDFqkIHKQcuS8Liq8boLAJg9ErgRpF_03w",
    authDomain: "authetificationbidhouse.firebaseapp.com",
    projectId: "authetificationbidhouse",
    storageBucket: "authetificationbidhouse.appspot.com",
    messagingSenderId: "699740366256",
    appId: "1:699740366256:web:9fa2f2cd9f3736956ca275",
    measurementId: "G-NMNQLGDCXM"
  };

  const app=initializeApp(firebaseConfig)
  const auth=getAuth(app)
  const analytics = getAnalytics(app);
  const db=getFirestore(app)
export{
  auth,
  db,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};