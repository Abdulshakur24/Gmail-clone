import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCkS-N3SfyoOEJB1cBgdKyOji3II0hDw2c",
  authDomain: "clone-ba23f.firebaseapp.com",
  projectId: "clone-ba23f",
  storageBucket: "clone-ba23f.appspot.com",
  messagingSenderId: "394608201100",
  appId: "1:394608201100:web:278aa90bdc98b7538adaa9",
  measurementId: "G-6TREY01R8V",
};

const firbaseApp = firebase.initializeApp(firebaseConfig);
const db = firbaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
