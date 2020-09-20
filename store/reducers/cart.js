import { ADD_TO_CART } from "../actions/cart";
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
  }
  return state;
}