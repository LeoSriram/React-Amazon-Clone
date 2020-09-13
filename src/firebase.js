import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCV2Yn0sJykSSdKHnMpbSfoggDa7TBTcJg",
  authDomain: "clone-56cbb.firebaseapp.com",
  databaseURL: "https://clone-56cbb.firebaseio.com",
  projectId: "clone-56cbb",
  storageBucket: "clone-56cbb.appspot.com",
  messagingSenderId: "368556891579",
  appId: "1:368556891579:web:8d4f2dbf00296c4bf4b89e",
  measurementId: "G-TG2BBPMSJM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };