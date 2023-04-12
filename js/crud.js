 // Add a new property when "Add Property" button is clicked
 function addProperty() {
    const propertyToAdd = { title: 'Example Property', price: 100000, location: 'Example Location' };
    addProperty(propertyToAdd)
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }

  // Get properties when "Get Properties" button is clicked
  function getProperties() {
    getProperties()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data());
        });
      })
      .catch((error) => {
        console.error('Error getting documents: ', error);
      });
  }

  // Update a property when "Update Property" button is clicked
  function updateProperty() {
    const propertyId = 'propertyId'; // replace with actual property ID
    const updatedPropertyData = { price: 120000 }; // update with actual property data
    updateProperty(propertyId, updatedPropertyData)
      .then(() => {
        console.log('Document successfully updated');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  }

  // Delete a property when "Delete Property" button is clicked
  function deleteProperty() {
    const propertyIdToDelete = 'propertyId'; // replace with actual property ID
    deleteProperty(propertyIdToDelete)
      .then(() => {
        console.log('Document successfully deleted');
      })
      .catch((error) => {
        console.error('Error deleting document: ', error);
      });
  }

  // crud.js

// Import the firebaseConfig object and initializeFirebase function from firebase_config.js
import { firebaseConfig, initializeFirebase } from './firebase_config.js';

// Initialize Firebase
initializeFirebase();

// Your CRUD functions using Firebase Firestore
// ...
