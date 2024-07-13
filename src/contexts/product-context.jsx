import { createContext, useReducer } from "react";

export const initialState = {
  size: null,
  price: null,
  color: null,
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        color: action.payload,
      };
    case "CHANGE_SIZE":
      return {
        ...state,
        size: action.payload.size,
        price: action.payload.size.price,
        discountPrice: (action.payload.size.price * (1 - action.payload.discount)).toFixed(2),
      };
    default:
      return state;
  }
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
