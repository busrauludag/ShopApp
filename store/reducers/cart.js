import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cart";
import { ADD_ORDER } from "../actions/orders";

import CardItem from './../../models/cart-item';

const initialState = {
  items: {},
  totalAmount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.addedProduct;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.tittle;

      let updatedOrNewCartItem;

      if (state.items[addedProduct.id]) {
        // already have he item  the cart
        updatedOrNewCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        // added new item
        updatedOrNewCartItem = new CardItem(1, prodPrice, prodTitle, prodPrice);
      }

      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: updatedOrNewCartItem
        },
        totalAmount: state.totalAmount + prodPrice
      }
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CardItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.prodPrice,
          selectedCartItem.prodTitle,
          selectedCartItem.sum - selectedCartItem.prodPrice
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        const updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.prodPrice
      }

    case ADD_ORDER:
      return initialState;
  }
  return state;
}