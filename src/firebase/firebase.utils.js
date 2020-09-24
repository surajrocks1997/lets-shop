import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAO0w4bjTM2dpGrpeP3qLyEaTe5IaWHAWE',
  authDomain: 'lets-shop-f0863.firebaseapp.com',
  databaseURL: 'https://lets-shop-f0863.firebaseio.com',
  projectId: 'lets-shop-f0863',
  storageBucket: 'lets-shop-f0863.appspot.com',
  messagingSenderId: '536705629618',
  appId: '1:536705629618:web:daeb64661e6387181c38ab',
  measurementId: 'G-J9XZ1KMT1B',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('Error Creating User', e.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
