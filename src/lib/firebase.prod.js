import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// if unCominted it will seed the database again nad duplicate the data
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyD1dWb39EuiNnvbCxMffAxHLgEq6bRZ3bQ",
  authDomain: "netflix-clone-4fa73.firebaseapp.com",
  projectId: "netflix-clone-4fa73",
  storageBucket: "netflix-clone-4fa73.appspot.com",
  messagingSenderId: "284257028832",
  appId: "1:284257028832:web:616462daeba340034a9e85",
};

const firebase = Firebase.initializeApp(config);

// if unCominted it will seed the database again nad duplicate the data
// seedDatabase(firebase);

export { firebase };
