import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCM_8SlKPckIY21R0MbXlM4BhpGST-kCKQ",
  authDomain: "imadfxq-recipeapp.firebaseapp.com",
  projectId: "imadfxq-recipeapp",
  storageBucket: "imadfxq-recipeapp.appspot.com",
  messagingSenderId: "163624785947",
  appId: "1:163624785947:web:fe0ec7459ef7991a1780be"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firebase services
const projectFirestore = firebase.firestore()

export {projectFirestore}