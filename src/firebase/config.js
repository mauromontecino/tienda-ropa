import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsItw3EHWPD5CirN8p0yaZ4j7yN0iUgV8",
  authDomain: "tienda-ropa-coder.firebaseapp.com",
  projectId: "tienda-ropa-coder",
  storageBucket: "tienda-ropa-coder.appspot.com",
  messagingSenderId: "979885853936",
  appId: "1:979885853936:web:b8dc9238d7e0edaa87c635",
  measurementId: "G-B62T4LX8T3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
