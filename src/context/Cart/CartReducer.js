import { ADD_ITEM, UPDATE_ITEM, REMOVE_ITEM, CLEAR_CART, LOAD_CART, SAVE_CART } from '../types';

export default (state, action) => {
  const initialStateCart = {
    itemsCount: 0,
    total: 0.00,
    items: []
  };

  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM:
      const existingItemIndex = state.items.findIndex(i => i.id === payload.detailItem.id);
      let newItemsArray = [];

      if (existingItemIndex !== -1) {
        newItemsArray = [...state.items.slice(0, existingItemIndex), payload.detailItem, ...state.items.slice(existingItemIndex + 1)];
      } else {
        newItemsArray = [...state.items, payload.detailItem];
      }

      const itemsCountAfterAdding = newItemsArray.reduce((count, i) => count + i.count, 0);

      const carTotalAfterAdding = newItemsArray.reduce((sum, i) => sum + i.subtotal, 0);

      return { itemsCount: itemsCountAfterAdding, total: carTotalAfterAdding, items: newItemsArray };
    case UPDATE_ITEM:
      const updatedItemIndex = state.items.findIndex(i => i.id === payload.itemId);

      if (updatedItemIndex !== -1) {
        const newItemSubtotal = state.items[updatedItemIndex].salesPrice * payload.newItemCount;
        const updatedItem = {
          ...state.items[updatedItemIndex],
          count: payload.newItemCount,
          subtotal: newItemSubtotal
        }

        const updatedItemsArray = [...state.items.slice(0, updatedItemIndex), updatedItem, ...state.items.slice(updatedItemIndex + 1)];

        const itemsCountAfterUpdate = updatedItemsArray.reduce((count, i) => count + i.count, 0);

        const cartTotalAfterUpdate = updatedItemsArray.reduce((sum, i) => sum + i.subtotal, 0);

        return { itemsCount: itemsCountAfterUpdate, total: cartTotalAfterUpdate, items: updatedItemsArray };
      }

      return { ...state };
    case REMOVE_ITEM:
      const itemToRemoveIndex = state.items.findIndex(i => i.id === payload.itemId);

      if (itemToRemoveIndex !== -1) {
        const removedItemsArray = [...state.items.slice(0, itemToRemoveIndex), ...state.items.slice(itemToRemoveIndex + 1)];

        const itemsCountAfterRemoval = removedItemsArray.reduce((count, i) => count + i.count, 0);

        const cartTotalAfterRemoval = removedItemsArray.reduce((sum, i) => sum + i.subtotal, 0);

        return {...state, itemsCount: itemsCountAfterRemoval, total: cartTotalAfterRemoval, items: removedItemsArray};
      }

      return { ...state };
    case CLEAR_CART:
      return { ...initialStateCart };

    case LOAD_CART:
      const retrievedCart = JSON.parse(localStorage.getItem('cart'));

      if (retrievedCart) {
        return { ...retrievedCart };
      } else {
        return { ...initialStateCart };
      }

    case SAVE_CART:
      const stringifiedCart = JSON.stringify(state);

      localStorage.setItem('cart', stringifiedCart);

      return { ...state };

    default:
      throw new RangeError(`Action type ${action.type} unknown.`);
  }
}