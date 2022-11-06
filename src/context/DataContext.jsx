import { createContext } from "react";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // Título global de la marca.
  const brandTitle = "Random Web Store";

  // Referencia a la base de datos Firestore
  const db = getFirestore();

  return (
    <DataContext.Provider
      value={{
        brandTitle, // El título de la App.
        app, // Referencia a la app de Firebase.
        db, // Referencia a la base de datos (Firestore).
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
