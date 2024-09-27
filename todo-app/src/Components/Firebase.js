import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD1HWByl02y07I2sBqqyXngNnLjMK1TlPI",
  authDomain: "motomoto-dad33.firebaseapp.com",
  projectId: "motomoto-dad33",
  storageBucket: "motomoto-dad33.appspot.com",
  messagingSenderId: "1035878591725",
  appId: "1:1035878591725:web:326a0fb51ad21a831af0e4"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}