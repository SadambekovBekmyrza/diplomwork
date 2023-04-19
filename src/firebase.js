import { collection, getFirestore } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC31N0QjkwHwvPXf737qNSw7D7ycWmyQs",
  authDomain: "diplom-338a3.firebaseapp.com",
  projectId: "diplom-338a3",
  storageBucket: "diplom-338a3.appspot.com",
  messagingSenderId: "213558855827",
  appId: "1:213558855827:web:f772284e3caa70e540a566",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const categoryCollection = collection(db, "categories");
export const productsCollection = collection(db, "products");
export const ordersCollection = collection(db, "orders");
const auth = getAuth(app);
// export const categoryCollection = collection(db, "categories");
// export const productsCollection = collection(db, "products");

const provider = new GoogleAuthProvider();
export const signIn = () => signInWithPopup(auth, provider);
export const signOut = () => signOut();

export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);
