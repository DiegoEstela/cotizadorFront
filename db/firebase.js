import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_G39CTDbucL5hBWZxEAZBnuvvSS2Hrq8",
  authDomain: "calecotizador.firebaseapp.com",
  projectId: "calecotizador",
  storageBucket: "calecotizador.appspot.com",
  messagingSenderId: "220782965731",
  appId: "1:220782965731:web:17795e9c841ece2ab366d6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}