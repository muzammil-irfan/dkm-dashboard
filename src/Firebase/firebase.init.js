import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKE5uwV-N5FbgUCtFZ9GM5-mWHCzzP-ks",
  authDomain: "dashboard-f-ec65d.firebaseapp.com",
  projectId: "dashboard-f-ec65d",
  storageBucket: "dashboard-f-ec65d.appspot.com",
  messagingSenderId: "593030927512",
  appId: "1:593030927512:web:3bca121f1c5b6822afeced"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
