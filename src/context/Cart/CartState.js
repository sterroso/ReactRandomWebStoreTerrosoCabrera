import React, { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART, LOAD_CART, SAVE_CART } from "../types";

const CartState = ({ children }) => {
  const initialState = {
    itemsCount: 0,
    total: 0.00,
    items: []
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addCartItem = (detailItem) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        detailItem
      }
    });
  };

  const updateCartItem = (itemId, newItemCount) => {
    dispatch({
      type: UPDATE_ITEM,
      payload: {
        itemId,
        newItemCount
      }
    });
  };

  const removeCartItem = (itemId) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: { itemId },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  const loadCartFromLocalStorage = () => {
    dispatch({
      type: LOAD_CART,
    });
  };

  const saveCartToLocalStorage = () => {
    dispatch({
      type: SAVE_CART,
    });
  };

  return (
    <CartContext.Provider
      value = {{
        itemsCount: state.itemsCount,
        total: state.total,
        items: state.items,
        addCartItem,
        updateCartItem,
        removeCartItem,
        clearCart,
        loadCartFromLocalStorage,
        saveCartToLocalStorage,
      }}
    >
      { children }
    </CartContext.Provider>
  )
}

export default CartState;