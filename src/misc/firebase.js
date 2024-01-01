
//import { Notification as Toast } from 'rsuite';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
//import { getMessaging, isSupported, onMessage } from 'firebase/messaging';
//import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
//import { isLocalhost } from './helpers';
const config = {
  apiKey: "AIzaSyAzTR7k3xizJdyqW0DkBksxdJAW5FqtcBw",
  authDomain: "chat-web-app-49f76.firebaseapp.com",
  databaseURL: "https://chat-web-app-49f76-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chat-web-app-49f76",
  storageBucket: "chat-web-app-49f76.appspot.com",
  messagingSenderId: "821349516173",
  appId: "1:821349516173:web:6d26e9a2742a8e7b45b3c4"
  
  
}
const app = initializeApp(config);
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);