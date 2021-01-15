import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyADYQELADCoMF_C8tUxSvr1-ulRpO2gZHI',
  authDomain: 'crwn-db-2cb6f.firebaseapp.com',
  projectId: 'crwn-db-2cb6f',
  storageBucket: 'crwn-db-2cb6f.appspot.com',
  messagingSenderId: '802836202785',
  appId: '1:802836202785:web:96eca6d4362ea7c9cb2a60',
  measurementId: 'G-N3BDF4CQB3',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    // unique id 가 생성됨 by fireStore.
    // 여기서 collectionRef.doc(obj.title); 하면 mens womens 이런거 뜸
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
  // .commit 으로 실행: batch Request
  // when it succeeds, it will come back with null value
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
