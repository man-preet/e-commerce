import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyCgZLBIq3-eq3eLUpFVfpzH_Ld-CBLykCA",
    authDomain: "shopease-d6665.firebaseapp.com",
    projectId: "shopease-d6665",
    storageBucket: "shopease-d6665.firebasestorage.app",
    messagingSenderId: "862588525851",
    appId: "1:862588525851:web:9f03b777c321cff1b5c7be",
    measurementId: "G-MDRZ53HT1S"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;
