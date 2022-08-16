import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwz-n4jRwpCgFTVR15yW8twZNJBzXlnTI",
  authDomain: "dasboard-f.firebaseapp.com",
  projectId: "dasboard-f",
  storageBucket: "dasboard-f.appspot.com",
  messagingSenderId: "308006524056",
  appId: "1:308006524056:web:9364beafd2043a756c2ced",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
