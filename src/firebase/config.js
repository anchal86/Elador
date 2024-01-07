import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDvVIHrtpYJjKpFAWl-6DHeli0WsLn9CTY",
  authDomain: "elador-541dc.firebaseapp.com",
  projectId: "elador-541dc",
  storageBucket: "elador-541dc.appspot.com",
  messagingSenderId: "631075410938",
  appId: "1:631075410938:web:67390f5e9889e720b50a43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app