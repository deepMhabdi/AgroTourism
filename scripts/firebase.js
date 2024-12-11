import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB1nehAmWKj29MdHqk79tPn_pIT1TUjs0k",
  authDomain: "agro-tourism-2004.firebaseapp.com",
  databaseURL: "https://agro-tourism-2004-default-rtdb.firebaseio.com",
  projectId: "agro-tourism-2004",
  storageBucket: "agro-tourism-2004.appspot.com",
  messagingSenderId: "14319541998",
  appId: "1:14319541998:web:65712aeb8d27f4eee61dff",
  measurementId: "G-YSKJE0K82G",
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const db = getFirestore(app); 

export { auth, db };
