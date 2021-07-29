import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database'; // importação de cada serviço que vai utilizar

const firebaseConfig = {
      // Your web app's Firebase 
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.REACT_APP_STORAGE_BUCKET,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);


 const auth  = firebase.auth(); //definir uma constante, utilizar na aplicação estes recursos, tenha só este nome 
 const database = firebase.database(); //para nao ficar importando

 export {firebase, auth, database}