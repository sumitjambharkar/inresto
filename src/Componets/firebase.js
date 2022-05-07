import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configurationa
const firebaseConfig = {
  apiKey: "AIzaSyDIn8gpgu0XueI1rXTpyspikvIt2kJSK7M",
  authDomain: "whatsapp-3f1d8.firebaseapp.com",
  databaseURL: "https://whatsapp-3f1d8-default-rtdb.firebaseio.com",
  projectId: "whatsapp-3f1d8",
  storageBucket: "whatsapp-3f1d8.appspot.com",
  messagingSenderId: "74010948707",
  appId: "1:74010948707:web:ff772c7aa2425e3cd73456"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}