import firebase from 'firebase/app';
import 'firebase/database';
// import { Database } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBvMVgw0K06jF6WKrm-5f8ezrLd1N0XEkE",
  authDomain: "webversed-live-id.firebaseapp.com",
  projectId: "webversed-live-id",
  storageBucket: "webversed-live-id.appspot.com",
  messagingSenderId: "179901377483",
  appId: "1:179901377483:web:bc8c0ee29ec7add184644e",
  measurementId: "G-25H7N7ZNGC",
};

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

export default database;