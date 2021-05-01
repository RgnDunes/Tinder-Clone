import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBfJL-7uzIuRwz43dK6gTH39Mfvx1uId-o",
  authDomain: "dunes-tinder-clone-react.firebaseapp.com",
  projectId: "dunes-tinder-clone-react",
  storageBucket: "dunes-tinder-clone-react.appspot.com",
  messagingSenderId: "755550099544",
  appId: "1:755550099544:web:40aa4ce05494d5969dd22d",
  measurementId: "G-0W36QD6V43",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
