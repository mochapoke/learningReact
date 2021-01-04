import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyADYQELADCoMF_C8tUxSvr1-ulRpO2gZHI",
  authDomain: "crwn-db-2cb6f.firebaseapp.com",
  projectId: "crwn-db-2cb6f",
  storageBucket: "crwn-db-2cb6f.appspot.com",
  messagingSenderId: "802836202785",
  appId: "1:802836202785:web:96eca6d4362ea7c9cb2a60",
  measurementId: "G-N3BDF4CQB3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;