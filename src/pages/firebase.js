import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvMVgw0K06jF6WKrm-5f8ezrLd1N0XEkE",
  authDomain: "webversed-live-id.firebaseapp.com",
  projectId: "webversed-live-id",
  storageBucket: "webversed-live-id.appspot.com",
  messagingSenderId: "179901377483",
  appId: "1:179901377483:web:bc8c0ee29ec7add184644e",
  measurementId: "G-25H7N7ZNGC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addQueryToFirestore = async (queryData) => {
  try {
    const docRef = await addDoc(collection(db, 'queries'), queryData);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error; 
  }
};