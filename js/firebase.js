

import { firebaseConfig } from './js/firebase_config.js';

firebase.initializeApp(firebaseConfig);

firebase.firestore().collection('users').add({
  name: 'John Doe',
  age: 30,
  city: 'New York'
}).then(docRef => {
  console.log('Document written with ID: ', docRef.id);
}).catch(error => {
  console.error('Error adding document: ', error);
});
