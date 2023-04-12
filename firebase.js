// Add a new document to a collection
const collectionRef = firebase.firestore().collection('properties');
const newProperty = { title: 'Example Property', price: 100000, location: 'Example Location' };
collectionRef.add(newProperty)
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });

  // Retrieve documents from a collection
const collectionRefGet = firebase.firestore().collection('properties');
collectionRefGet.get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  })
  .catch((error) => {
    console.error('Error getting documents: ', error);
  });

  // Update a document
const docRefUpdate = firebase.firestore().collection('properties').doc('propertyId');
docRefUpdate.update({ price: 120000 })
  .then(() => {
    console.log('Document successfully updated');
  })
  .catch((error) => {
    console.error('Error updating document: ', error);
  });

  // Delete a document
const docRefDelete = firebase.firestore().collection('properties').doc('propertyId');
docRefDelete.delete()
  .then(() => {
    console.log('Document successfully deleted');
  })
  .catch((error) => {
    console.error('Error deleting document: ', error);
  });

// Import the Firebase SDK
import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration object here
};

firebase.initializeApp(firebaseConfig);

// CRUD operations functions

// Create
const addProperty = (property) => {
  const collectionRefAdd = firebase.firestore().collection('properties');
  return collectionRefAdd.add(property);
};

// Read
const getProperties = () => {
  const collectionRefGet = firebase.firestore().collection('properties');
  return collectionRefGet.get();
};

// Update
const updateProperty = (propertyId, updatedProperty) => {
  const docRefUpdate = firebase.firestore().collection('properties').doc(propertyId);
  return docRefUpdate.update(updatedProperty);
};

// Delete
const deleteProperty = (propertyId) => {
  const docRefDelete = firebase.firestore().collection('properties').doc(propertyId);
  return docRefDelete.delete();
};

// Usage examples
// Add a new document to 'properties' collection
const propertyToAdd = { title: 'Example Property', price: 100000, location: 'Example Location' };
addProperty(propertyToAdd)
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch((error) => {
    console.error('Error adding document: ', error);
  });

// Retrieve documents from 'properties' collection
getProperties()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  })
  .catch((error) => {
    console.error('Error getting documents: ', error);
  });

// Update a document in 'properties' collection
const propertyId = 'propertyId'; // replace with actual property ID
const updatedPropertyData = { price: 120000 }; // update with actual property data
updateProperty(propertyId, updatedPropertyData)
  .then(() => {
    console.log('Document successfully updated');
  })
  .catch((error) => {
    console.error('Error updating document: ', error);
  });

// Delete a document from 'properties' collection
const propertyIdToDelete = 'propertyId'; // replace with actual property ID
deleteProperty(propertyIdToDelete)
  .then(() => {
    console.log('Document successfully deleted');
  })
  .catch((error) => {
    console.error('Error deleting document: ', error);
  });
