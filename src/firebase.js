import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyDA4YS4_whEO-CujoeNR9G7gfrAw2BE3AQ",
  authDomain: "burguerqueen-6dc2c.firebaseapp.com",
  databaseURL: "https://burguerqueen-6dc2c.firebaseio.com",
  projectId: "burguerqueen-6dc2c",
  storageBucket: "burguerqueen-6dc2c.appspot.com",
  messagingSenderId: "41311849012",
  appId: "1:41311849012:web:d6d1458957c9eeb3709861",
  measurementId: "G-EG149785SG",
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
//firebase deploy --only hosting:burguer-queen-wood
