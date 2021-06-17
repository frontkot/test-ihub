import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYIWdex_YmrGYP20rQGyzEX87MDXyw3ko",
  authDomain: "test-ihub.firebaseapp.com",
  projectId: "test-ihub",
  storageBucket: "test-ihub.appspot.com",
  messagingSenderId: "279374863024",
  appId: "1:279374863024:web:f3e392561b4d04ec5cf975"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default db;