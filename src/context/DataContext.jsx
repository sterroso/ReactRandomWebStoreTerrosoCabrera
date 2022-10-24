import { createContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    // Global Brand Title.
    const brandTitle = 'Random Web Store';

    // Firestore Database reference object.
    const db = getFirestore();

    // Cart contents
    const [cart, setCart] = useState([]);

    const addCartItem = (itemId) => {
    };

    return (
        <DataContext.Provider value={{
            brandTitle,
            db
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContext;