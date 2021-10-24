
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDrJfsZPoeGw6eME-SEn_5n8lcgBwXaWHc",
    authDomain: "nextjs-d1fca.firebaseapp.com",
    projectId: "nextjs-d1fca",
    storageBucket: "nextjs-d1fca.appspot.com",
    messagingSenderId: "185623279591",
    appId: "1:185623279591:web:4535e69d4321084021af42"
};

// next runs things twice sometimes and firebase allows only one auth:
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
