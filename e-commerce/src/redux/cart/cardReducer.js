import * as actionTypes from "./cartTypes";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      name: "Computer",
      rating: "690",
    },
    {
      id: 2,
      name: "Mobile phone",
      rating: "604",
    },
    {
      id: 3,
      name: "Camera",
      rating: "751",
    },
    {
      id: 4,
      name: "Sports equipment",
      rating: "718",
    },
    {
      id: 5,
      name: "Computer1",
      rating: "747",
    },
    {
      id: 6,
      name: "Computer2",
      rating: "678",
    },
    {
      id: 7,
      name: "Mobile phone1",
      rating: "599",
    },
    {
      id: 8,
      name: "Mobile phone2",
      rating: "569",
    },
    {
      id: 9,
      name: "Camera1",
      rating: "521",
    },
    {
      id: 10,
      name: "Camera2",
      rating: "543",
    },
    {
      id: 11,
      name: "Sports equipment1",
      rating: "743",
    },
  ],
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const itemAdd = state.products.find((prod) => prod.id === action.payload.id);
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
        const itemRem = state.products.find((prod) => prod.id === action.payload.id);
        const isInCartRem = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
      return {
        ...state,
        cart: isInCartRem
            ? state.cart.map((itemRem) =>
            itemRem.id === action.payload.id
                  ? { ...itemRem, quantity: itemRem.quantity - 1 }
                  : itemRem
              ) : [...state.cart, { ...itemRem, quantity: 0 }],
      };
    case actionTypes.REMOVE_ALL:
      return {};

    default:
      return state;
  }
};

export default cartReducer;
