import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyA001Rfa30_l2Lj_aRR5KpasOfwOdKK4gY",
//   authDomain: "letmeask-project-7c338.firebaseapp.com",
//   databaseURL: "https://letmeask-project-7c338-default-rtdb.firebaseio.com",
//   projectId: "letmeask-project-7c338",
//   storageBucket: "letmeask-project-7c338.appspot.com",
//   messagingSenderId: "654534914172",
//   appId: "1:654534914172:web:baaf010093a29e907f59f9"
// };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
export {firebase, auth, database};