import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkZ9gRh8E9ToCsbjshSoadvW2_rEBh-j4",
  authDomain: "fir-ca132.firebaseapp.com",
  projectId: "fir-ca132",
  storageBucket: "fir-ca132.appspot.com",
  messagingSenderId: "301667973163",
  appId: "1:301667973163:web:ba49d900a633682f6a926e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
