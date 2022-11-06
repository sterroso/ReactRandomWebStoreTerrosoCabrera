import React, { Children, useReducer } from "react";
import CartItemReducer from "./CartItemReducer";
import CartItemContext from "./CartITemContext";

const CartItemState = ({children}) => {
  const initialState = {
    id: null,
    title: '',
    description: '',
    imageUrl: '',
    count: 1,
    stock: 1,
    salesPrice: 0.00,
    subtotal: 0.00
  }

  const [state, dispatch] = useReducer(CartItemReducer, initialState);

  const getCount = () => state.count;

  const getSubtotal = () => state.subtotal;

  const getSalesPrice = () => state.salesPrice;

  const getStock = () => state.stock;

  return (
    <CartItemContext.Provider>
      value = {{
        ...state
      }},
      {children}
    </CartItemContext.Provider>
  )
}

export default CartItemState;