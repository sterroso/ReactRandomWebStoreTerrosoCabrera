import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

// Tipo de almacenamiento por defecto: 'localStorage' / 'sessionStorage'
const defaultStorageType = "localStorage";

export const DataProvider = ({ children }) => {
  // Título global de la marca.
  const brandTitle = "Random Web Store";

  // Referencia a la base de datos Firestore
  const db = getFirestore();

  /**
   * Verifica que esté disponible un tipo de almacenamiento (localStorage | sessionStorage).
   *
   * @param {string} type El tipo de storage que se quiere verificar: localStorage | sessionStorage
   * @returns true si está disponible, false de lo contrario.
   */
  const storageAvailable = (type) => {
    // El objeto donde se guarda la referencia al almacenamiento.
    let storage;

    // Intenta hacer una prueba de almacenamiento.
    try {
      storage = window[type];
      const x = "__storageTest__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // No Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // Campo 'nombre' para casos en que el código de error
          // no se especifica.
          // No Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // reporta error de Cuota Excedida  solo si ya hay datos guardados
        storage &&
        storage.length !== 0
      );
    }
  };

  /**
   * Guarda un objeto (registro), identificado por la llave (key) proporcionada,
   * en el almacenamiento de Sesión (sessionStorage).
   *
   * @param {string} key La llave que identificará al objeto (registro) guardado.
   * @param {Object} record Registro que será guardado.
   * @param {string} storageType El tipo de almacenamiento en el que se guardará
   * el objeto (registro).
   * @returns true si se guardó el objeto (registro), false de lo contrario.
   */
  const saveRecord = (key, record, storageType) => {
    if (storageAvailable(storageType)) {
      const storage = window[storageType];
      storage.setItem(key, JSON.stringify(record));

      return true;
    }

    return false;
  };

  /**
   * Devuelve un objeto, del almacenamiento proporcionado, identificado con la
   * llave proporcionada.
   *
   * @param {string} key Llave del registro que se desea cargar.
   * @param {string} storageType Tipo de almacenamiento en el que se buscará el registro.
   * @returns Un objeto JSON, del tipo de almacenamiento proporcionado, identificado por la
   * llave proporcionada. Devuelve nulo (null) si no existe un objeto identificado con la llave
   * proporcionada o no está disponible el almacenamiento de Sesión.
   */
  const loadRecord = (key, storageType) => {
    if (storageAvailable(storageType)) {
      let storage = window[storageType];
      return JSON.parse(storage.getItem(key));
    }

    return null;
  };

  /**
   * Elimina un registro, identificado con la llave proporcionada, del almacenamiento
   * indicado.
   *
   * @param {string} key Llave del registro a eliminar.
   * @param {string} storageType Tipo de almacenamiento del que se desea remover el registro
   */
  const removeRecord = (key, storageType) => {
    if (storageAvailable(storageType)) {
      let storage = window[storageType];
      storage.removeItem(key);
    }
  };

  const loadCartFromLocalStorage = () => {
    if (storageAvailable(defaultStorageType)) {
      return loadRecord("cart");
    }

    return {};
  };

  const saveCartToLocalStorage = () => {
    if (storageAvailable(defaultStorageType)) {
      return saveRecord("cart", cart);
    }

    return false;
  };

  const getInitialCart = () => {
    const initialCart = loadCartFromLocalStorage();

    if (!initialCart) {
      return { itemsCount: 0, total: 0, items: [] };
    }

    return initialCart;
  };

  // Hook del estado del Carrito de compras.
  const [cart, setCart] = useState(getInitialCart());

  // Hook del estado de los items del Carrito de compras.
  const [cartItems, setCartItems] = useState([]);

  // Hook de efecto de cambio de estado del Carrito de compras.
  useEffect(() => {
    saveCartToLocalStorage();
  }, [cart]);

  // Hook de efecto de cambio de estado de los items del Carrito de compras.
  useEffect(() => {
    // Número total de ítems (artículos) en el Carrito de compras.
    const cartItemsCount = cartItems.reduce(
      (count, item) => count + item.itemCount,
      0
    );

    // Suma de todos los subtotales por ítem del Carrito de compras.
    const cartTotal = cartItems.reduce((sum, item) => sum + item.subtotal, 0);

    // Nuevo Carrito de compras
    const newCart = {
      itemsCount: cartItemsCount,
      total: cartTotal,
      items: cartItems,
    };

    // Establece el estado del Carrito de compras.
    setCart(newCart);
  }, [cartItems]);

  // Quita un ítem identificado por su id.
  const removeCartItem = (itemId) => {
    const existingItemIndex = cartItems.findIndex((i) => i.id === itemId);

    if (existingItemIndex !== -1) {
      setCartItems([
        ...cartItems.slice(0, existingItemIndex),
        ...cartItems.slice(existingItemIndex + 1),
      ]);
    }
  };

  const addCartItem = (item, quantity) => {
    // Busca si ya existe el ítem en el carrito.
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);

    // Si el ítem ya estaba en el carrito ...
    if (existingItemIndex !== -1) {
      // ... calcula la nueva cantidad (no mayor al stock disponible),
      const newQuantity = Math.min(
        item.stock,
        cartItems[existingItemIndex].count + quantity
      );

      // y modifica el ítem dentro del arreglo de ítems.
      updateCartItemCount(item.id, newQuantity);
    } else {
      // ... si el ítem no estaba en el carrito
      const newQuantity = Math.min(item.stock, quantity);
      const newSubtotal = newQuantity * item.price;

      const newCartItem = {
        id: item.id,
        title: item.title,
        description: item.description,
        imageUrl: item.imageUrl,
        count: newQuantity,
        salesPrice: item.price,
        subtotal: newSubtotal,
      };

      setCartItems([...cartItems, newCartItem]);
    }
  };

  const updateCartItemCount = (itemId, newQantity) => {
    const existingItemIndex = cartItems.findIndex((i) => i.id === itemId);

    if (existingItemIndex !== -1) {
      const newSubtotal = cartItems[existingItemIndex].salesPrice * newQantity;

      const newCartItem = {
        id: cartItems[existingItemIndex].id,
        title: cartItems[existingItemIndex].title,
        description: cartItems[existingItemIndex].description,
        imageUrl: cartItems[existingItemIndex].imageUrl,
        count: newQantity,
        salesPrice: cartItems[existingItemIndex].salesPrice,
        subtotal: newSubtotal,
      };

      setCartItems([
        ...cartItems.slice(0, existingItemIndex),
        newCartItem,
        ...cartItems.slice(existingItemIndex + 1),
      ]);
    }
  };

  const clearCartItems = () => {
    setCartItems([]);
  };

  const formatCurrencyNumber = (number) =>
    new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
    }).format(number);

  return (
    <DataContext.Provider
      value={{
        brandTitle, // El título de la App.
        db, // Referencia a la base de datos (Firestore).
        formatCurrencyNumber, // Da formato de moneda a un número.
        cart, // Carrito de compras.
        setCart, // Estado del Carrito de compras.
        cartItems, // Arreglo de ítems del Carrito de compras.
        setCartItems, // Estado del arreglo de ítems del Carrito de compras.
        addCartItem, // Agrega un ítem al arreglo de ítems del Carrito de compras.
        updateCartItemCount, // Actualiza la cantidad de un ítem particular.
        removeCartItem, // Quita un ítem del arreglo de ítems del Carrito de compras.
        clearCartItems, // Quita todos los ítems del arreglo de ítems del Carrito de compras.
        saveCartToLocalStorage, // Guarda el Carrito de compras en localStorage.
        loadCartFromLocalStorage, // Carga el Carrito de compras desde localStorage.
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
