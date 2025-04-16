import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCxM4MurcSFqN4uTFIGX1pmXDIvyRhK-Rs",
  authDomain: "kingdom-foods.firebaseapp.com",
  projectId: "kingdom-foods",
  storageBucket: "kingdom-foods.firebasestorage.app",
  messagingSenderId: "200257471236",
  appId: "1:200257471236:web:2e39bc37362e7008fac651",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db }; 