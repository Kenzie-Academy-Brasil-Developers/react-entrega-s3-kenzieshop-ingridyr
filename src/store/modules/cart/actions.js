import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  product,
});

export const removeFromCart = (index) => ({
  type: REMOVE_FROM_CART,
  index,
});
