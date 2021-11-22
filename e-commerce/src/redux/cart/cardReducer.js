import * as actionTypes from "./cartTypes";

const INITIAL_STATE = {
  products: [],
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS_TO_PAGE:
      return {
        ...state,
        products: action.payload,
      };
    case actionTypes.ADD_TO_CART:
      const itemAdd = state.products.item.find(
        (prod) => prod.id === action.payload.id
      );
      const isInCartAdd = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: isInCartAdd
          ? state.cart.map((itemAdd) =>
              itemAdd.id === action.payload.id
                ? { ...itemAdd, quantity: itemAdd.quantity + 1 }
                : itemAdd
            )
          : [...state.cart, { ...itemAdd, quantity: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      const itemRem = state.products.item.find(
        (prod) => prod.id === action.payload.id
      );
      const isInCartRem = state.cart.find((itemRem) =>
        itemRem.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart:
          isInCartRem.quantity === 1
            ? state.cart.filter((itemRem) => itemRem.id !== action.payload.id)
            : state.cart.map((itemRem) =>
                itemRem.id === action.payload.id
                  ? { ...itemRem, quantity: itemRem.quantity - 1 }
                  : itemRem
              ),
      };
    case actionTypes.REMOVE_ALL:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
