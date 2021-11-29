import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAwPcsy3CrvdmixekR7mE-exiGzhO8f1Yw",
    authDomain: "cosc4351-1c98f.firebaseapp.com",
    projectId: "cosc4351-1c98f",
    storageBucket: "cosc4351-1c98f.appspot.com",
    messagingSenderId: "246870091858",
    appId: "1:246870091858:web:141ee7b4623b592eb8978b",
    measurementId: "G-G0HC49G1FT"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export function useAuth() {
    const [currentUser, setCurrentUser ] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser());
        return unsub;
    })
    return currentUser;
}