// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import other services if needed
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDtErJ8g05JnutVNbQjGCgArFpX6MFC1VU",
//   authDomain: "my-firebase-31476.firebaseapp.com",
//   projectId: "my-firebase-31476",
//   storageBucket: "my-firebase-31476.appspot.com",
//   messagingSenderId: "490352003580",
//   appId: "1:490352003580:web:951ae32d4f6203f6e70a79",
//   measurementId: "G-NFK4W0F85R"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAuChxarBguHjcb6p6sTsqKB0R4i0J1T7U",
  authDomain: "fooddelivery-39181.firebaseapp.com",
  databaseURL: "https://fooddelivery-39181-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-39181",
  storageBucket: "fooddelivery-39181.appspot.com",
  messagingSenderId: "199183915166",
  appId: "1:199183915166:web:cbc1122b929c915ff6c38f",
  measurementId: "G-WC9QLJ94ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase services you want to use
export const auth = getAuth(app);
export const storage = getStorage(app);