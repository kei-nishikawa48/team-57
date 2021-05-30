import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB-Y5aaI97UzW5zp30JsCdtG5EGh5cV6xY",
  authDomain: "chatapp57-77b7c.firebaseapp.com",
  projectId: "chatapp57-77b7c",
  storageBucket: "chatapp57-77b7c.appspot.com",
  messagingSenderId: "466319232924",
  appId: "1:466319232924:web:f7c4c6c31be8e51b060259",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export default firebase