import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1u6AlVWhos2gldNczVCzo7USWx1WYCS4",
  authDomain: "peerchat-e65e5.firebaseapp.com",
  projectId: "peerchat-e65e5",
  storageBucket: "peerchat-e65e5.appspot.com",
  messagingSenderId: "407866553204",
  appId: "1:407866553204:web:616aaf153cac131ae5f221",
  measurementId: "G-NGW3BCCB6Q",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);