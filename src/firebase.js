import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {

    apiKey: "AIzaSyDxZzvjv8FUdL1Y7QPkNgq-izOGMazuQCQ",

    authDomain: "linkedin-clone-ss-8cb3a.firebaseapp.com",

    projectId: "linkedin-clone-ss-8cb3a",

    storageBucket: "linkedin-clone-ss-8cb3a.appspot.com",

    messagingSenderId: "327232204777",

    appId: "1:327232204777:web:c67d2bc7fe34c0413a6578",

    measurementId: "G-00QVWK54V0"

};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export {db, auth};
