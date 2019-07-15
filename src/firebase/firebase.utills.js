import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDadctJNs9ZFEFLRIES_IkzQ9IsnCJlDwg",
    authDomain: "mnichols08-ecomreact.firebaseapp.com",
    databaseURL: "https://mnichols08-ecomreact.firebaseio.com",
    projectId: "mnichols08-ecomreact",
    storageBucket: "",
    messagingSenderId: "338656412272",
    appId: "1:338656412272:web:846c4827953b9405"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;