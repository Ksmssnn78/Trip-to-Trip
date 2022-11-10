import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA5a6pF5IOs_e_LqqimEhS3mEbYyC1jVDQ",
    authDomain: "trip-to-trip-a300c.firebaseapp.com",
    projectId: "trip-to-trip-a300c",
    storageBucket: "trip-to-trip-a300c.appspot.com",
    messagingSenderId: "594263672890",
    appId: "1:594263672890:web:01b6cd1ccb7aafb5fa0d03"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

// export const auth = getAuth(app);
export { app, auth };