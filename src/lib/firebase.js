import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyAMsXlvGNpVz3odXgBaNzmB04LRWkwPKQQ',
  authDomain: 'instagram-53554.firebaseapp.com',
  projectId: 'instagram-53554',
  storageBucket: 'instagram-53554.appspot.com',
  messagingSenderId: '696729690725',
  appId: '1:696729690725:web:e468644c631a1051ea9c8c'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// to provide data for database
// seedDatabase(firebase);

export { firebase, FieldValue };
