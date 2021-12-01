import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initfirebase = () =>{
    initializeApp(firebaseConfig);
}
export default initfirebase;