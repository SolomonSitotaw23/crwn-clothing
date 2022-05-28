import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyA32EFLoEWXDWfY5v1xRZA67dLdviSzO4w",
  authDomain: "crwn-db-1e95e.firebaseapp.com",
  projectId: "crwn-db-1e95e",
  storageBucket: "crwn-db-1e95e.appspot.com",
  messagingSenderId: "254148751501",
  appId: "1:254148751501:web:42bf909d8887628e0672c4",
  measurementId: "G-BRFP9M0G9F",
};

firebase.initializeApp(config);
export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
