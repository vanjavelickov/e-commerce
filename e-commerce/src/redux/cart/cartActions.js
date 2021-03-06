import * as actionTypes from "./cartTypes";

export const addToCart = (itemId) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemId,
    },
  };
};

export const removeAll = () => {
  return {
    type: actionTypes.REMOVE_ALL,
    payload: {
      item: [],
    },
  };
};

export const setProductsToPage = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS_TO_PAGE,
    payload: {
      item: products,
    },
  };
};
