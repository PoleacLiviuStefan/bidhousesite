import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
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
  const analytics = getAnalytics(app);
  export const auth=getAuth(app);