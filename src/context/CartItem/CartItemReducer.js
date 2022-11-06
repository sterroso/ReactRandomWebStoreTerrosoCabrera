import React from "react";

const CartItemReducer = ({state, action}) => {
  const ACTION_TYPES = {
    INCREMENT_COUNT: 0,
    DECREMENT_COUNT: 1,
    PARSE_PRICE: 2,
  };

  let newCount, newSubtotal;

  switch (action.type) {
    case ACTION_TYPES.DECREMENT_COUNT:
      newCount = state.count <= 1 ? 1 : state.count - 1;
      break;
    case ACTION_TYPES.INCREMENT_COUNT:
      newCount = state.count >= state.stock ? state.stock : state.count + 1;
      break;
    case ACTION_TYPES.PARSE_PRICE:
      return {...state, salesPrice: parseFloat(action.payload)};
    default:
      throw RangeError(`Action type [${action.type}] is unknown.`);
  }

  newSubtotal = newCount * state.salesPrice;
  return {...state, count: newCount, subtotal: newSubtotal};
}

export default CartItemReducer;