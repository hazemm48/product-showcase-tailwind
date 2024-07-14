import { createContext, useReducer } from "react";

export const initialState = {
  products: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: [
          ...state.products,
          { ...action.payload, cartId: state.products.length + 1 },
        ],
      };
    case "REMOVE_PRODUCT":
      return {
        products: state.products.filter(
          (product) => product?.cartId !== action.payload?.cartId,
        ),
      };
    case "INCREMENT_PRODUCT":
      return {
        products: state.products.map((product) =>
          product?.cartId === action.payload?.cartId
            ? {
                ...product,
                quantity: product.quantity + 1,
              }
            : product,
        ),
      };
    case "DECREMENT_PRODUCT":
      return {
        products: state.products.map((product) =>
          product?.cartId === action.payload?.cartId
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product,
        ),
      };
    case "CLEAR_CART":
      return {
        products: [],
      };
    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
