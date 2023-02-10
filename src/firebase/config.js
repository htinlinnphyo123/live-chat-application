import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAE-a1CC29aD3Ild53D8G5K36D85BzBV1k",
    authDomain: "vue-blog-system-e3200.firebaseapp.com",
    projectId: "vue-blog-system-e3200",
    storageBucket: "vue-blog-system-e3200.appspot.com",
    messagingSenderId: "1006459329832",
    appId: "1:1006459329832:web:770b9dde95321c2c9b041d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const timestamp = serverTimestamp();

export {db,auth,timestamp}